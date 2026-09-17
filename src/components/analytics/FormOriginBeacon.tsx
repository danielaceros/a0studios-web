"use client";

// Guarda en sessionStorage de qué página sale el lead (ruta + UTM) en cuanto se monta el formulario de GHL.
// El formulario redirige a /gracias en la ventana principal (window.top.location), así que allí LeadAttribution
// lo lee y dispara `Lead`. Sin este beacon, /gracias no sabría distinguir un lead real de una visita directa.
// Equivalente a lo que hace daniaceros.com dentro de components/LazyContactForm.tsx.

import { useEffect } from "react";
import { FORM_ORIGIN_KEY, currentFormOrigin } from "@/lib/analytics";

export default function FormOriginBeacon() {
  useEffect(() => {
    try {
      sessionStorage.setItem(FORM_ORIGIN_KEY, JSON.stringify(currentFormOrigin()));
    } catch {
      // Sin sessionStorage (modo privado estricto): el formulario funciona igual, se pierde la atribución.
    }
  }, []);

  return null;
}
