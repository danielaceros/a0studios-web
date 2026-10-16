"use client";

// Anclas de la página (#contacto, #resultados...). Este componente existe por una
// sola razón: el `<a href="#x">` nativo deja la sección pegada al borde superior y
// la nav fija se le come los primeros 110 px. Aquí se resta ese alto y se salta.
//
// Antes animaba el recorrido con un easeInOutCubic de 800 ms. Desde el hero hasta
// el formulario hay unas once pantallas, así que el usuario tocaba el botón y se
// quedaba casi un segundo viendo pasar la página: parece que no ha respondido y
// vuelve a tocar. Ahora el salto es seco, como el de un ancla de verdad. El
// desplazamiento suave se queda donde el recorrido es corto y sí se lee como un
// gesto: los carruseles, que llevan su propio `scroll-smooth`.

import { useEffect } from "react";

/** Alto de la nav fija: lo que hay que descontar para que la sección no quede debajo. */
const NAV_HEIGHT = 110;

export default function SmoothScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Un clic con modificador abre en otra pestaña/ventana: no es cosa nuestra.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement;
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = document.querySelector(hash);
      if (!el) return;

      e.preventDefault();

      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT,
        behavior: "auto",
      });

      // La URL se actualiza aparte para que el navegador no vuelva a saltar por su cuenta.
      history.pushState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
