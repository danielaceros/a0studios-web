# Auditoria Responsive - Rooftop Content Studio

**Fecha:** 2026-03-31
**Stack:** Next.js 15, Tailwind CSS v4, TypeScript
**Viewports analizados:** 320px, 375px, 428px, 768px, 1024px, 1280px, 1440px

---

## RESUMEN EJECUTIVO

| Severidad | Cantidad |
|-----------|----------|
| Critico   | 12       |
| Medio     | 25       |
| Menor     | 15       |

---

## PROBLEMAS CRITICOS (rompen layout o accesibilidad)

### 1. Texto FAQ/Accordion a 6.4px en 320px
- **Seccion:** FAQ + Accordion
- **Viewports:** 320px, 375px
- **Archivo:** `src/components/ui/Accordion.tsx:11`
- **Problema:** `text-[clamp(1.2rem,2vw,1.6rem)]` - a 320px, 2vw = 6.4px. Texto completamente ilegible.
- **Fix:**
```tsx
// Antes
className="pr-8 font-heading text-[clamp(1.2rem,2vw,1.6rem)]"
// Despues
className="pr-8 font-heading text-[clamp(1.3rem,3vw,1.6rem)]"
```

### 2. iframe ContactFormEmbed 600px en mobile (187% del viewport)
- **Seccion:** Contacto
- **Viewports:** 320px, 375px, 428px
- **Archivo:** `src/components/sections/ContactFormEmbed.tsx:70`
- **Problema:** `style={{ minHeight: 600 }}` fuerza 600px minimo incluso en mobile.
- **Fix:**
```tsx
// Antes
style={{ minHeight: 600 }}
// Despues - usar clases responsive
className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
```
- **Tambien:** Placeholder en linea 41: `min-h-[600px]` -> `min-h-[300px] sm:min-h-[400px] md:min-h-[600px]`

### 3. Botones CTA con texto a 11px en toda la web
- **Seccion:** Hero, Beneficios, Portfolio, FAQ, Proceso
- **Viewports:** 320px, 375px, 428px
- **Archivos:** Hero.tsx:112, Beneficios.tsx:57, Portfolio.tsx:188, FAQ.tsx:43, Proceso.tsx:94
- **Problema:** `text-[11px]` esta por debajo del minimo de 14px para texto legible.
- **Fix global:**
```tsx
// Antes
className="... font-mono text-[11px] ..."
// Despues
className="... font-mono text-[12px] sm:text-[11px] ..."
```

### 4. VirtualTour: texto caption a 7px
- **Seccion:** Tour Virtual
- **Viewports:** 320px
- **Archivo:** `src/components/sections/VirtualTour.tsx:817-826`
- **Problema:** Caption usa `text-[7px]` en mobile. Completamente ilegible.
- **Fix:**
```tsx
// Antes
className="font-mono text-[7px] sm:text-[8px] lg:text-[9px]"
// Despues
className="font-mono text-[9px] sm:text-[10px] lg:text-[11px]"
```

### 5. VirtualTour: flechas navegacion 32px (bajo 44px minimo)
- **Seccion:** Tour Virtual
- **Viewports:** 320px, 375px, 428px
- **Archivo:** `src/components/sections/VirtualTour.tsx:828-851`
- **Problema:** Botones navegacion fotos con `width: 32, height: 32` inline.
- **Fix:**
```tsx
// Antes
style={{ width: 32, height: 32, ... }}
// Despues
style={{ width: 44, height: 44, ... }}
```

### 6. VirtualTour: dots indicadores a 4px (imposible tocar)
- **Seccion:** Tour Virtual
- **Viewports:** 320px, 375px, 428px
- **Archivo:** `src/components/sections/VirtualTour.tsx:859-870`
- **Problema:** Dots de 4px sin area tactil expandida. Necesitan min 44px de area.
- **Fix:**
```tsx
// Envolver cada dot en boton con area minima
<button
  key={i}
  onClick={() => setPhotoIndex(i)}
  className="flex items-center justify-center"
  style={{ minWidth: 32, minHeight: 32 }}
  aria-label={`Ir a foto ${i + 1}`}
>
  <span style={{ width: i === photoIndex ? 14 : 4, height: 4 }} />
</button>
```

### 7. PromoBanner: boton cerrar tap target 28px
- **Seccion:** PromoBanner
- **Viewports:** 320px, 375px
- **Archivo:** `src/components/ui/PromoBanner.tsx:87-99`
- **Problema:** `p-1.5` crea area clicable de ~28px. Necesita minimo 44px.
- **Fix:**
```tsx
// Antes
className="... p-1.5 ..."
// Despues
className="... p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center ..."
```

### 8. FlashOffer: boton dismiss 20px
- **Seccion:** FlashOffer
- **Viewports:** 320px, 375px
- **Archivo:** `src/components/ui/FlashOffer.tsx:39-47`
- **Problema:** `h-5 w-5` (20px) para boton cerrar.
- **Fix:**
```tsx
// Antes
className="... h-5 w-5 ..."
// Despues
className="... h-10 w-10 flex items-center justify-center ..."
```

### 9. PortfolioCard: modal close button bajo 44px
- **Seccion:** Portfolio modal
- **Viewports:** 320px, 375px, 428px
- **Archivo:** `src/components/sections/PortfolioCard.tsx:160-167`
- **Problema:** `px-3 py-1` crea boton de ~24px altura.
- **Fix:**
```tsx
// Despues
className="... min-h-[44px] min-w-[44px] flex items-center justify-center px-4 py-2 ..."
```

### 10. Footer: links tap target sin padding
- **Seccion:** Footer
- **Viewports:** 320px, 375px, 428px
- **Archivo:** `src/components/layout/Footer.tsx:20, 41-44, 74, 86, 89, 92`
- **Problema:** Links a `text-[12px]` sin padding adicional. Area clicable minuscula.
- **Fix:**
```tsx
// Anadir a todos los links del footer
className="... py-1.5 -my-1.5 ..."
```

### 11. MobileMenu: scroll lock roto en iOS
- **Seccion:** Navbar/Menu
- **Viewports:** Todos los mobile
- **Archivo:** `src/components/layout/MobileMenu.tsx:10-17`
- **Problema:** Solo aplica `overflow: hidden` a `documentElement`, iOS Safari necesita tambien en `body`.
- **Fix:**
```tsx
useEffect(() => {
  if (isOpen) {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  } else {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
  }
  return () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.width = "";
  };
}, [isOpen]);
```

### 12. SmoothScroll: navHeight hardcodeado a 90px
- **Seccion:** Navegacion global
- **Viewports:** Todos
- **Archivo:** `src/components/ui/SmoothScroll.tsx:42`
- **Problema:** `navHeight = 90` no contempla PromoBanner. Los anchor links quedan detras del navbar.
- **Fix:**
```tsx
// Antes
const navHeight = 90;
// Despues
const navHeight = 110; // navbar + margen de seguridad para banner
```

---

## PROBLEMAS MEDIOS (afectan UX pero no rompen layout)

### 13. Founder: texto body a 12.8px (bajo 14px WCAG)
- **Seccion:** Founder
- **Viewports:** 320px, 375px
- **Archivo:** `src/components/sections/Founder.tsx:25`
- **Problema:** `text-[0.8rem]` = 12.8px en mobile.
- **Fix:**
```tsx
// Antes
className="text-[0.8rem] leading-[1.7] ..."
// Despues
className="text-[0.85rem] leading-[1.8] sm:text-[0.9rem] ..."
```

### 14. Founder: imagen 80px demasiado pequena
- **Seccion:** Founder
- **Viewports:** 320px, 375px, 428px
- **Archivo:** `src/components/sections/Founder.tsx:17`
- **Problema:** `h-20 w-20` (80px) en mobile es muy pequena.
- **Fix:**
```tsx
// Antes
className="h-20 w-20 ... sm:h-32 sm:w-32"
// Despues
className="h-24 w-24 ... sm:h-36 sm:w-36"
```

### 15. Hero: testimonial container altura insuficiente
- **Seccion:** Hero
- **Viewports:** 320px
- **Archivo:** `src/components/sections/Hero.tsx:135`
- **Problema:** `h-[3.2em]` puede cortar testimonios largos a 320px.
- **Fix:**
```tsx
// Antes
className="... h-[3.2em] sm:h-[2.8em] ..."
// Despues
className="... h-[3.8em] sm:h-[3.2em] md:h-[2.8em] ..."
```

### 16. Hero: heading clamp minimo alto para 320px
- **Seccion:** Hero
- **Viewports:** 320px
- **Archivo:** `src/components/sections/Hero.tsx:83`
- **Problema:** `clamp(2.8rem,11vw,6.5rem)` - minimo 2.8rem puede ser excesivo a 320px con leading 0.86.
- **Fix:**
```tsx
// Antes
text-[clamp(2.8rem,11vw,6.5rem)] ... leading-[0.86]
// Despues
text-[clamp(2.2rem,11vw,6.5rem)] ... leading-[0.95] sm:leading-[0.86]
```

### 17. VideoBackground: video no cambia en rotacion
- **Seccion:** Hero background
- **Viewports:** Todos mobile
- **Archivo:** `src/components/ui/VideoBackground.tsx:19-28`
- **Problema:** Video mobile/desktop se elige solo en mount. Si el usuario rota, no cambia.
- **Fix:**
```tsx
// Anadir listener de orientationchange
useEffect(() => {
  const update = () => {
    if (!isSlow) {
      setVideoSrc(window.innerWidth < 768 ? VIDEO_MOBILE : VIDEO_DESKTOP);
    }
  };
  update();
  window.addEventListener("orientationchange", update);
  return () => window.removeEventListener("orientationchange", update);
}, []);
```

### 18. Marquee: texto a 11.2px (bajo 14px)
- **Seccion:** Marquee (Hero bottom)
- **Viewports:** 320px, 375px, 428px
- **Archivo:** `src/components/ui/Marquee.tsx:11`
- **Problema:** `text-[clamp(0.7rem,1.4vw,0.85rem)]` = 11.2px a 320px.
- **Fix:**
```tsx
// Antes
text-[clamp(0.7rem,1.4vw,0.85rem)]
// Despues
text-[clamp(0.8rem,1.5vw,0.95rem)]
```

### 19. SocialProof: label 10px dificil de leer
- **Seccion:** SocialProof stats
- **Viewports:** 320px, 375px
- **Archivo:** `src/components/sections/SocialProof.tsx:90`
- **Problema:** `text-[10px]` con `tracking-[0.2em]` es muy pequeno.
- **Fix:**
```tsx
// Despues
className="... text-[9px] sm:text-[10px] ... tracking-[0.15em] sm:tracking-[0.2em] ..."
```

### 20. SocialProof: logos width salto brusco sm->lg
- **Seccion:** SocialProof logos
- **Viewports:** 768px
- **Archivo:** `src/components/sections/SocialProof.tsx:102`
- **Problema:** De `sm:w-[70%]` (537px a 768px) salta a `lg:w-[320px]`. Cambio brusco.
- **Fix:**
```tsx
// Antes
className="... w-[85%] ... sm:w-[70%] lg:w-[320px] xl:w-[380px]"
// Despues
className="... w-[90%] ... sm:w-[75%] md:w-[60%] lg:w-[320px] xl:w-[380px]"
```

### 21. Proceso: heading clamp excesivo a 320px
- **Seccion:** Proceso
- **Viewports:** 320px
- **Archivo:** `src/components/sections/Proceso.tsx:60`
- **Problema:** `clamp(2.4rem,9vw,7rem)` con leading 0.9 queda apretado.
- **Fix:**
```tsx
text-[clamp(1.8rem,7vw,7rem)]
```

### 22. Proceso: split 55%/45% hardcoded
- **Seccion:** Proceso (desktop)
- **Viewports:** 768px, 1024px
- **Archivo:** `src/components/sections/Proceso.tsx:132, 176`
- **Problema:** Porcentajes fijos sin responsive intermedio.
- **Fix:**
```tsx
// Usar flex-basis en lugar de width fijo
className="flex-[55] min-w-0 pr-8"
className="flex-[45] min-w-0"
```

### 23. CTA: grid 2 columnas a 768px estrecha el formulario
- **Seccion:** CTA/Contacto
- **Viewports:** 768px
- **Archivo:** `src/components/sections/CTA.tsx:15`
- **Problema:** `md:grid-cols-2` a 768px deja columnas de ~360px, insuficiente para formulario.
- **Fix:**
```tsx
// Antes
className="grid gap-12 md:grid-cols-2 ..."
// Despues
className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16"
```

### 24. CTA: sticky top-32 puede solapar
- **Seccion:** CTA
- **Viewports:** 768px
- **Archivo:** `src/components/sections/CTA.tsx:17`
- **Problema:** `md:sticky md:top-32` no alinea con scroll-margin-top: 130px de globals.css.
- **Fix:**
```tsx
// Antes
className="md:sticky md:top-32"
// Despues
className="lg:sticky lg:top-[130px]"
```

### 25. Tarifas: card padding excesivo en mobile
- **Seccion:** Tarifas/Opciones
- **Viewports:** 375px
- **Archivo:** `src/components/sections/Tarifas.tsx:59`
- **Problema:** `p-7` (28px) en todas direcciones a 375px es excesivo.
- **Fix:**
```tsx
// Antes
className="... p-7 sm:p-9 lg:p-10"
// Despues
className="... p-5 sm:p-7 md:p-9 lg:p-10"
```

### 26. Tarifas: boton CTA sin min-height 44px
- **Seccion:** Tarifas/Opciones
- **Viewports:** 375px, 428px
- **Archivo:** `src/components/sections/Tarifas.tsx:104`
- **Problema:** `py-3.5` puede no llegar a 44px.
- **Fix:**
```tsx
className="... py-4 min-h-[44px] ..."
```

### 27. Comparativa: dots carrusel 8px sin area tactil
- **Seccion:** Comparativa/Testimonios
- **Viewports:** 320px, 375px
- **Archivo:** `src/components/sections/Comparativa.tsx:270`
- **Problema:** `h-2` (8px) sin area tactil expandida.
- **Fix:**
```tsx
<button className="flex h-8 w-8 items-center justify-center">
  <span className="h-2 rounded-full ..." />
</button>
```

### 28. Comparativa: nav buttons 40px (bajo 44px)
- **Seccion:** Comparativa/Testimonios
- **Viewports:** 320px, 375px
- **Archivo:** `src/components/sections/Comparativa.tsx:228, 256`
- **Problema:** `h-10 w-10` = 40px.
- **Fix:**
```tsx
className="flex h-11 w-11 sm:h-10 sm:w-10 shrink-0 ..."
```

### 29. Comparativa: quote text 14.4px borderline
- **Seccion:** Comparativa/Testimonios
- **Viewports:** 320px
- **Archivo:** `src/components/sections/Comparativa.tsx:155`
- **Problema:** `text-[0.9rem]` = 14.4px. Role text `text-[0.8rem]` = 12.8px.
- **Fix:**
```tsx
className="... text-sm sm:text-base ..."  // quote
className="... text-xs sm:text-sm ..."     // role
```

### 30. ContactForm: labels a 12px con tracking excesivo
- **Seccion:** Formulario contacto
- **Viewports:** 320px, 375px
- **Archivo:** `src/components/ui/ContactForm.tsx:13, 29, 47, 60`
- **Problema:** `text-xs` (12px) + `tracking-[0.2em]` ilegible.
- **Fix:**
```tsx
className="... text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] ..."
```

### 31. ContactForm: submit button padding excesivo
- **Seccion:** Formulario contacto
- **Viewports:** 320px, 375px
- **Archivo:** `src/components/ui/ContactForm.tsx:80`
- **Problema:** `px-12` + `text-xl` excesivo en 320px.
- **Fix:**
```tsx
className="... px-8 py-3 text-base sm:px-10 sm:py-4 sm:text-lg lg:px-12 lg:text-xl ..."
```

### 32. NeonFlow: gradiente superior 288px (48% viewport en 320px)
- **Seccion:** Background NeonFlow
- **Viewports:** 320px, 375px, 428px
- **Archivo:** `src/components/ui/NeonFlow.tsx:103`
- **Problema:** `h-72` (288px) fijo cubre demasiado en mobile.
- **Fix:**
```tsx
// Antes
className="... h-72 ..."
// Despues
className="... h-40 sm:h-56 lg:h-72 ..."
```

### 33. QueEs: padding cards excesivo en mobile
- **Seccion:** QueEs
- **Viewports:** 320px, 375px
- **Archivo:** `src/components/sections/QueEs.tsx:31`
- **Problema:** `p-6` (24px) en cards single-column deja poco espacio.
- **Fix:**
```tsx
className="... p-4 sm:p-6 md:p-8 ..."
```

### 34. VirtualTour: zone chips sin scroll-snap
- **Seccion:** Tour Virtual
- **Viewports:** 320px, 375px, 428px
- **Archivo:** `src/components/sections/VirtualTour.tsx:760-800`
- **Problema:** Scroll horizontal sin snap points, posiciones inconsistentes.
- **Fix:**
```tsx
className="flex gap-2 overflow-x-auto pb-1 scrollbar-none scroll-smooth snap-x snap-mandatory ..."
// Cada chip:
className="... snap-start ..."
```

### 35. VirtualTour: swipe threshold 50px demasiado alto en 320px
- **Seccion:** Tour Virtual
- **Viewports:** 320px
- **Archivo:** `src/components/sections/VirtualTour.tsx:595-604`
- **Problema:** 50px = 15.6% del viewport a 320px.
- **Fix:**
```tsx
const threshold = Math.min(50, window.innerWidth * 0.12);
```

### 36. DitherCard: sin eventos touch
- **Seccion:** QueEs (cards)
- **Viewports:** 320px-1024px (touch devices)
- **Archivo:** `src/components/ui/DitherCard.tsx:22-23`
- **Problema:** Solo responde a mouse hover, no a touch.
- **Fix:**
```tsx
onTouchStart={() => setIsHovered(!isHovered)}
```

### 37. ScrollReveal: posible jank en mobile low-end
- **Seccion:** Todas (wrapper global)
- **Viewports:** 320px, 375px
- **Archivo:** `src/components/ui/ScrollReveal.tsx:24, 74-76`
- **Problema:** Animaciones 0.7s con cubic-bezier en dispositivos lentos.
- **Fix:**
```tsx
// Comprobar conexion lenta
const conn = (navigator as any).connection;
const isSlow = conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g";
if (isSlow) { setVisible(true); return; }
```

---

## PROBLEMAS MENORES (mejoras visuales)

### 38. Portfolio: gradiente lateral 44px excesivo en 320px
- **Archivo:** `src/components/sections/Portfolio.tsx:92-111`
- **Fix:** Reducir a 32px en mobile, 44px en sm+

### 39. Navbar: logo h-14 apretado en 320px
- **Archivo:** `src/components/layout/Navbar.tsx:38-50`
- **Fix:** `h-11 w-11 sm:h-14 sm:w-14`

### 40. Footer: grid 2-col apretado en 320px
- **Archivo:** `src/components/layout/Footer.tsx:10`
- **Fix:** `grid-cols-1 gap-8 sm:grid-cols-2`

### 41. Beneficios: label tracking-[0.4em] excesivo en 320px
- **Archivo:** `src/components/sections/Beneficios.tsx:9`
- **Fix:** `tracking-[0.3em] sm:tracking-[0.4em]`

### 42. Hero: logo wrapper w-[85%] apretado en 320px
- **Archivo:** `src/components/sections/Hero.tsx:160`
- **Fix:** `w-[95%] sm:w-[85%]`

### 43. LoadingScreen: counter text invisible (#333 sobre #080808)
- **Archivo:** `src/components/ui/LoadingScreen.tsx:446`
- **Fix:** `text-accent/40`

### 44. LoadingScreen: progress bar 120px ancho en 320px
- **Archivo:** `src/components/ui/LoadingScreen.tsx:437`
- **Fix:** `w-[80px] sm:w-[120px]`

### 45. Z-index inconsistente entre overlays
- **Archivos:** PromoBanner z-[60], FlashOffer z-[60], WhatsApp z-[60]
- **Fix:** FlashOffer z-[61], PromoBanner z-[60], WhatsApp z-[55]

### 46. Comparativa: desktop grid tight a 1024px
- **Archivo:** `src/components/sections/Comparativa.tsx:310`
- **Fix:** `lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6`

### 47. Beneficios: items sin padding horizontal en mobile
- **Archivo:** `src/components/sections/Beneficios.tsx:24`
- **Fix:** Anadir `px-3` en mobile

### 48. Tarifas: list items line-height apretado
- **Archivo:** `src/components/sections/Tarifas.tsx:92`
- **Fix:** `leading-[1.4] sm:leading-snug`

### 49. PortfolioCard: play icon escala 0.8 muy pequeno en 320px
- **Archivo:** `src/components/sections/PortfolioCard.tsx:115`
- **Fix:** `scale-100 sm:scale-[0.8]`

### 50. VirtualTour: overlay zone info 9px subtitle
- **Archivo:** `src/components/sections/VirtualTour.tsx:807-815`
- **Fix:** `text-[10px] sm:text-[11px]`

### 51. Accordion: sin will-change en rotacion icono
- **Archivo:** `src/components/ui/Accordion.tsx:15`
- **Fix:** Anadir `will-change-transform`

### 52. VirtualTour: autoplay button bajo 44px
- **Archivo:** `src/components/sections/VirtualTour.tsx:616-640`
- **Fix:** `min-h-[44px] px-4 py-2`

---

## SECCIONES SIN PROBLEMAS SIGNIFICATIVOS

- **GrainOverlay:** Correctamente implementado con `prefers-reduced-motion` y canvas ligero (128x128).
- **CustomCursor:** Correctamente desactivado en touch devices con `(pointer: fine) and (min-width: 768px)`.
- **SmoothScroll:** Funcional (solo ajustar navHeight).

---

## LISTA PRIORIZADA DE FIXES

### Fase 1 - Criticos (1-2 horas)
1. FAQ/Accordion clamp text fix (5 min)
2. ContactFormEmbed iframe height responsive (10 min)
3. CTA buttons text-[11px] -> text-[12px] sm:text-[11px] global (15 min)
4. VirtualTour caption 7px -> 9px (5 min)
5. VirtualTour nav arrows 32px -> 44px (5 min)
6. VirtualTour dots area tactil (10 min)
7. PromoBanner close button tap target (5 min)
8. FlashOffer dismiss button tap target (5 min)
9. PortfolioCard modal close tap target (5 min)
10. Footer links tap targets (10 min)
11. MobileMenu iOS scroll lock (10 min)
12. SmoothScroll navHeight (2 min)

### Fase 2 - Medios (1-2 horas)
13. Founder text 12.8px -> 13.6px+ (5 min)
14. Founder image size (5 min)
15. Hero testimonial height (5 min)
16. Hero heading clamp adjustment (5 min)
17. VideoBackground orientation change (10 min)
18. Marquee text size (5 min)
19. SocialProof labels y logos (10 min)
20. Proceso heading y split layout (15 min)
21. CTA grid breakpoint md -> lg (5 min)
22. Tarifas padding y button (10 min)
23. Comparativa dots, nav, text (15 min)
24. ContactForm labels y button (10 min)
25. NeonFlow gradient height (5 min)
26. QueEs card padding (5 min)
27. VirtualTour chips snap + swipe threshold (10 min)
28. DitherCard touch events (5 min)
29. ScrollReveal slow connection check (5 min)

### Fase 3 - Menores (30-45 min)
30-52. Fixes menores de polish visual (30-45 min total)

---

## TOTAL ESTIMADO: 3-4 horas para todos los fixes
