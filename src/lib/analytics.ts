// Medición en cliente de a0studios.es: píxel de Meta + GA4 (gtag).
// Mismo contrato que daniaceros.com (lib/analytics.ts allí): las dos webs guardan el origen del formulario
// en sessionStorage y disparan en /gracias el MISMO evento estándar de Meta, `Lead`, con los mismos
// parámetros. No cambiar los nombres aquí sin cambiarlos allí: el adset de Meta optimiza por ese evento.

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", name, params);
    window.clarity?.("event", name);
  } catch {
    // La medición nunca debe romper la página.
  }
}

/**
 * Los scripts de medición cargan con lazyOnload: un evento lanzado al montar la página se perdería.
 * Espera a que `isReady()` se cumpla (como mucho `timeoutMs`) y ejecuta `callback` igualmente al agotarse.
 */
function whenReady(isReady: () => boolean, callback: () => void, timeoutMs: number) {
  if (typeof window === "undefined") return () => {};
  if (isReady()) {
    callback();
    return () => {};
  }
  const started = Date.now();
  const timer = window.setInterval(() => {
    if (isReady() || Date.now() - started > timeoutMs) {
      window.clearInterval(timer);
      callback();
    }
  }, 400);
  return () => window.clearInterval(timer);
}

/** Espera a gtag: para los eventos de GA4 (diagnóstico). */
export function whenAnalyticsReady(callback: () => void, timeoutMs = 20000) {
  return whenReady(() => !!window.gtag, callback, timeoutMs);
}

/**
 * Espera al píxel de Meta. `Lead` es el evento por el que optimizan los anuncios, así que no se puede
 * colgar de gtag: si gtag estuviera listo y fbq todavía no, el evento se perdería. El snippet del píxel
 * define `window.fbq` de forma síncrona y encola las llamadas, así que basta con que exista.
 */
export function whenPixelReady(callback: () => void, timeoutMs = 20000) {
  return whenReady(() => typeof window.fbq === "function", callback, timeoutMs);
}

/** sessionStorage: de qué formulario sale el lead. Lo guarda FormOriginBeacon; lo lee /gracias. */
export const FORM_ORIGIN_KEY = "form_origin";

/**
 * sessionStorage: marca de tiempo de un ENVÍO real del formulario. La escribe FormOriginBeacon cuando el iframe
 * de GHL avisa de que ha creado el contacto; la lee /gracias. `form_origin` NO sirve para esto: se escribe al
 * montar el formulario, o sea con solo llegar a verlo, y dejaba que /gracias contara como lead a cualquiera que
 * bajase hasta el formulario sin enviarlo y luego llegase a /gracias por historial o atrás/adelante.
 */
export const FORM_SUBMIT_KEY = "form_submitted_at";

/** Un envío vale como lead solo si /gracias llega poco después; pasado este rato, la marca se considera vieja. */
export const SUBMIT_MAX_AGE_MS = 15 * 60 * 1000;

/** sessionStorage: qué lead se ha contado ya, para no repetirlo al recargar /gracias o volver con atrás/adelante. */
export const LEAD_FIRED_KEY = "lead_fired";

/**
 * Origen del formulario de GHL: solo se aceptan mensajes suyos al escuchar el envío.
 *
 * REVERTIDO (17-sep-2026) a api.fitnesslaunch.es: servir el iframe desde api.daniaceros.com, el dominio
 * white-label, rompía el formulario en producción ("Este contenido está bloqueado") aunque la URL respondiera
 * 200 al pedirla suelta. Falta configurar ese dominio en GHL para poder embeberlo; hasta entonces, no tocar.
 */
export const GHL_FORM_ORIGIN = "https://api.fitnesslaunch.es";
export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export type FormOrigin = {
  /** a0studios.es no tiene landings de anuncios (/eventos) como daniaceros.com: aquí siempre es "web". */
  origin: "web";
  /** Ruta de la página del formulario. */
  form_page: string;
} & Partial<Record<(typeof UTM_KEYS)[number], string>>;

/** Origen del formulario de la página actual, más las UTM de la URL. */
export function currentFormOrigin(): FormOrigin {
  const result: FormOrigin = { origin: "web", form_page: window.location.pathname };
  const search = new URLSearchParams(window.location.search);
  for (const key of UTM_KEYS) {
    const value = search.get(key);
    if (value) result[key] = value.slice(0, 100);
  }
  return result;
}

/** Id del formulario de GHL de A0Studios (el mismo en las dos partes de la web donde está embebido). */
export const GHL_FORM_ID = "sxDYj1gBgfvDh9PI9Jte";

/**
 * URL del iframe del formulario con el origen del lead: la query de la página (UTM) + `origen` y `pagina`.
 * GHL copia estos params a la URL de la redirección, así que son la prueba en /gracias de que el lead viene
 * de un envío de verdad. Solo en cliente. Mismo patrón que `prepareFormSrc` en daniaceros.com.
 */
export function ghlFormSrc(): string {
  const params = new URLSearchParams(window.location.search);
  params.set("origen", "web");
  params.set("pagina", window.location.pathname);
  return `${GHL_FORM_ORIGIN}/widget/form/${GHL_FORM_ID}?${params}`;
}
