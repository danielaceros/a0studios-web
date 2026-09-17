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
