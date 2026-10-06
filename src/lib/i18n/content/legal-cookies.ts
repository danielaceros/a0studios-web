import type { Courtesy } from "./legal-shared"
import { courtesyEn } from "./legal-shared"

const es = {
  metaTitle: "Política de Cookies — A0Studios",
  metaDescription:
    "Política de cookies de A0Studios: qué son, tipos utilizados, cookies de terceros, gestión y consentimiento.",
  courtesy: null as Courtesy,
  h1: "Política de Cookies",
  intro:
    "Esta web, titularidad de Daniel Acero Sagredo (A0Studios), utiliza cookies propias y de terceros para mejorar la experiencia de navegación, analizar el uso del sitio y ofrecer contenidos adaptados a los intereses del usuario.",
  whatH: "1. ¿Qué son las cookies?",
  what:
    "Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita una página web. Permiten recordar información sobre su visita, como el idioma preferido u otras opciones de configuración.",
  typesH: "2. Tipos de cookies utilizadas",
  types: [
    { k: "Cookies técnicas:", v: "necesarias para el funcionamiento del sitio web y la prestación de los servicios ofrecidos." },
    { k: "Cookies de análisis:", v: "permiten analizar el comportamiento de los usuarios para mejorar la web (por ejemplo, Google Analytics)." },
    { k: "Cookies publicitarias:", v: "gestionan los espacios publicitarios en base a criterios como el contenido editado o la frecuencia con la que se muestran los anuncios." },
    { k: "Cookies de redes sociales:", v: "permiten interactuar con plataformas como Instagram, Facebook o TikTok." },
  ],
  thirdH: "3. Cookies de terceros",
  third:
    "Este sitio web puede utilizar servicios de terceros que recopilan información con fines estadísticos, de uso del sitio web y para la prestación de otros servicios relacionados con la actividad del sitio web.",
  thirdList: ["Google Analytics", "Google Ads", "Meta (Facebook Pixel)", "Microsoft Clarity"],
  manageH: "4. Gestión y configuración de cookies",
  manage:
    "El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su dispositivo:",
  browsers: [
    { n: "Chrome", u: "https://support.google.com/chrome/answer/95647" },
    { n: "Safari", u: "https://support.apple.com/es-es/HT201265" },
    { n: "Firefox", u: "https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-cookies" },
    { n: "Edge", u: "https://support.microsoft.com/es-es/help/4027947" },
  ],
  consentH: "5. Consentimiento",
  consent:
    "Al acceder a este sitio web por primera vez, el usuario verá un aviso sobre el uso de cookies. Si continúa navegando, se considerará que acepta su uso conforme a lo descrito en la presente política.",
  updateH: "6. Actualización de la política de cookies",
  update:
    "El titular de este sitio web se reserva el derecho a modificar la presente política de cookies en función de exigencias legales o técnicas. Se recomienda al usuario revisar periódicamente esta política.",
}

const en: typeof es = {
  metaTitle: "Cookie Policy — A0Studios",
  metaDescription:
    "A0Studios cookie policy: what cookies are, types used, third-party cookies, how to manage them and consent.",
  courtesy: courtesyEn,
  h1: "Cookie Policy",
  intro:
    "This website, owned by Daniel Acero Sagredo (A0Studios), uses first-party and third-party cookies to improve the browsing experience, analyse use of the site and offer content tailored to the user's interests.",
  whatH: "1. What are cookies?",
  what:
    "Cookies are small text files stored on the user's device when they visit a web page. They make it possible to remember information about the visit, such as the preferred language or other configuration options.",
  typesH: "2. Types of cookies used",
  types: [
    { k: "Technical cookies:", v: "necessary for the operation of the website and the provision of the services offered." },
    { k: "Analytics cookies:", v: "allow user behaviour to be analysed in order to improve the website (for example, Google Analytics)." },
    { k: "Advertising cookies:", v: "manage advertising space based on criteria such as the content published or how often ads are shown." },
    { k: "Social media cookies:", v: "allow interaction with platforms such as Instagram, Facebook or TikTok." },
  ],
  thirdH: "3. Third-party cookies",
  third:
    "This website may use third-party services that collect information for statistical purposes, for website usage and for the provision of other services related to the activity of the website.",
  thirdList: ["Google Analytics", "Google Ads", "Meta (Facebook Pixel)", "Microsoft Clarity"],
  manageH: "4. Managing and configuring cookies",
  manage:
    "The user can allow, block or delete the cookies installed on their device through the settings of the browser installed on it:",
  browsers: [
    { n: "Chrome", u: "https://support.google.com/chrome/answer/95647" },
    { n: "Safari", u: "https://support.apple.com/en-us/HT201265" },
    { n: "Firefox", u: "https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox" },
    { n: "Edge", u: "https://support.microsoft.com/en-us/help/4027947" },
  ],
  consentH: "5. Consent",
  consent:
    "When accessing this website for the first time, the user will see a notice about the use of cookies. If the user continues browsing, they will be deemed to accept their use as described in this policy.",
  updateH: "6. Updates to the cookie policy",
  update:
    "The owner of this website reserves the right to modify this cookie policy in line with legal or technical requirements. Users are advised to review this policy periodically.",
}

export const legalCookiesContent = { es, en }
