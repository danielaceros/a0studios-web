"use client";

// /gracias: dispara el lead, pero SOLO si se llega aquí desde un envío real del formulario.
//
// El gate anterior se fiaba de `form_origin`, que se escribe al MONTAR el formulario. Eso no dice "ha enviado",
// dice "el formulario llegó a verse en esta pestaña": cualquiera que bajase hasta el formulario sin enviarlo y
// después llegase a /gracias (historial, atrás/adelante, enlace) contaba como conversión, y esa señal falsa
// entraba directa en el aprendizaje de Meta. Ahora se exige una prueba de envío, por dos vías independientes:
//
//  1. Los parámetros de la redirección. GHL redirige con `window.top.location.href` y le copia a la URL de
//     destino los params del iframe, que el embed rellena con `origen` y `pagina`.
//  2. El aviso del propio formulario (`set-sticky-contacts`), que FormOriginBeacon escucha y marca con hora.
//
// Basta con una de las dos. Si no hay ninguna pero sí un `form_origin` guardado, no se dispara nada a Meta y se
// deja constancia en GA4 (`lead_gate_miss`) para poder ver si el gate se está comiendo leads buenos.
//
// El evento de Meta es `Lead`, el estándar, igual que en daniaceros.com. No renombrar sin cambiarlo allí.

import { useEffect } from "react";
import {
  FORM_ORIGIN_KEY,
  FORM_SUBMIT_KEY,
  LEAD_FIRED_KEY,
  SUBMIT_MAX_AGE_MS,
  UTM_KEYS,
  trackEvent,
  whenAnalyticsReady,
  whenPixelReady,
  type FormOrigin,
} from "@/lib/analytics";

/** Lee el origen del lead de los params que GHL copia al redirigir. En a0studios `origen` siempre es "web". */
function leadFromRedirect(params: URLSearchParams): FormOrigin | null {
  const origen = params.get("origen");
  const pagina = params.get("pagina");
  if (!origen || !pagina) return null;

  const lead: FormOrigin = { origin: "web", form_page: pagina };
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) lead[key] = value.slice(0, 100);
  }
  return lead;
}

function readStored(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function clearStored(...keys: string[]) {
  try {
    for (const key of keys) sessionStorage.removeItem(key);
  } catch {
    // Sin sessionStorage no hay nada que limpiar.
  }
}

export default function LeadAttribution() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const fromRedirect = leadFromRedirect(params);
    const submittedAt = Number(readStored(FORM_SUBMIT_KEY)) || 0;
    const submittedRecently = submittedAt > 0 && Date.now() - submittedAt < SUBMIT_MAX_AGE_MS;

    let stored: FormOrigin | null = null;
    const raw = readStored(FORM_ORIGIN_KEY);
    if (raw) {
      try {
        stored = JSON.parse(raw) as FormOrigin;
      } catch {
        stored = null;
      }
    }

    // Sin prueba de envío no se cuenta como lead. Si había `form_origin`, se deja el rastro solo en GA4.
    if (!fromRedirect && !submittedRecently) {
      if (stored?.origin) {
        whenAnalyticsReady(() => trackEvent("lead_gate_miss", stored));
      }
      clearStored(FORM_ORIGIN_KEY);
      return;
    }

    const lead = fromRedirect ?? stored;
    if (!lead?.origin) return;

    // Recargar /gracias o volver con atrás/adelante repite esta misma URL: no se cuenta dos veces.
    const firedKey = window.location.search || "sin-params";
    if (readStored(LEAD_FIRED_KEY) === firedKey) return;
    try {
      sessionStorage.setItem(LEAD_FIRED_KEY, firedKey);
    } catch {
      // Sin sessionStorage se pierde la protección anti-duplicado, no el lead.
    }
    clearStored(FORM_ORIGIN_KEY, FORM_SUBMIT_KEY);

    const cancelAnalytics = whenAnalyticsReady(() => {
      trackEvent("form_lead", lead);
    });
    const cancelPixel = whenPixelReady(() => {
      try {
        // Mismos parámetros que daniaceros.com. `lp_id` va vacío: a0studios.es no tiene landings /eventos.
        window.fbq?.("track", "Lead", {
          origin: lead.origin,
          lp_id: "",
          form_page: lead.form_page,
        });
      } catch {
        // La medición nunca debe romper la página.
      }
    });

    return () => {
      cancelAnalytics();
      cancelPixel();
    };
  }, []);

  return null;
}
