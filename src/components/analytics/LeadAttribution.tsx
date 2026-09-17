"use client";

// /gracias: dispara el evento de lead. FormOriginBeacon guarda el origen del formulario en sessionStorage al
// montarse; aquí se lee, se borra (para no contar dos veces si se recarga /gracias) y se lanza `form_lead` en
// GA4 y `Lead` (evento ESTÁNDAR de Meta) en el píxel.
//
// `Lead` es el único evento de optimización de las dos webs de Dani: daniaceros.com dispara exactamente el
// mismo nombre con los mismos parámetros (components/landing/LeadAttribution.tsx allí). No renombrar aquí sin
// cambiarlo allí y sin ajustar el promoted_object del adset en Meta.

import { useEffect } from "react";
import {
  FORM_ORIGIN_KEY,
  trackEvent,
  whenAnalyticsReady,
  whenPixelReady,
  type FormOrigin,
} from "@/lib/analytics";

export default function LeadAttribution() {
  useEffect(() => {
    let origin: FormOrigin | null = null;
    try {
      const raw = sessionStorage.getItem(FORM_ORIGIN_KEY);
      sessionStorage.removeItem(FORM_ORIGIN_KEY);
      origin = raw ? JSON.parse(raw) : null;
    } catch {
      return;
    }
    if (!origin?.origin) return;
    const lead = origin;

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
