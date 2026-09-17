"use client";

// Va junto al formulario de GHL y hace dos cosas:
//  1. Guarda de qué página sale el lead (ruta + UTM) al montarse, para que /gracias pueda atribuirlo.
//  2. Escucha el aviso de ENVÍO del iframe (`set-sticky-contacts`, que GHL emite tras crear el contacto) y deja
//     una marca con hora. Esto es lo que /gracias exige para contar el lead: el punto 1 por sí solo solo prueba
//     que el formulario llegó a verse, no que nadie lo enviara.
//
// El formulario redirige la ventana principal con `window.top.location.href`, así que /gracias carga en el
// dominio propio y lee este sessionStorage. Equivalente a lo que hace daniaceros.com en LazyContactForm.

import { useEffect } from "react";
import { FORM_ORIGIN_KEY, FORM_SUBMIT_KEY, GHL_FORM_ORIGIN, currentFormOrigin } from "@/lib/analytics";

export default function FormOriginBeacon() {
  useEffect(() => {
    try {
      sessionStorage.setItem(FORM_ORIGIN_KEY, JSON.stringify(currentFormOrigin()));
    } catch {
      // Sin sessionStorage (modo privado estricto): el formulario funciona igual, se pierde la atribución.
    }

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== GHL_FORM_ORIGIN) return;
      if (!Array.isArray(event.data) || event.data[0] !== "set-sticky-contacts") return;
      try {
        sessionStorage.setItem(FORM_SUBMIT_KEY, String(Date.now()));
      } catch {
        // Sin sessionStorage: /gracias todavía puede reconocer el envío por los params de la redirección.
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
}
