import type { Courtesy } from "./legal-shared"
import { courtesyEn } from "./legal-shared"

const es = {
  metaTitle: "Aviso Legal — A0Studios",
  metaDescription:
    "Aviso legal de A0Studios: datos del titular del sitio web, condiciones de uso, propiedad intelectual, responsabilidad y legislación aplicable.",
  courtesy: null as Courtesy,
  h1: "Aviso Legal",
  intro:
    "En cumplimiento de lo dispuesto en la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios del presente sitio web de los siguientes datos:",
  fields: [
    { k: "Titular del sitio web:", v: "Daniel Acero Sagredo" },
    { k: "Nombre comercial:", v: "A0Studios" },
    { k: "DNI/NIF:", v: "06590329R" },
    { k: "Domicilio:", v: "Rda. de Atocha, 16, 7ºC esc dcha, 28012 Madrid, España" },
    { k: "Correo electrónico de contacto:", v: "dani@a0studios.es" },
  ],
  sections: [
    {
      h: "Condiciones de uso",
      p: [
        "El acceso y uso de este sitio web atribuye la condición de usuario, que acepta desde dicho acceso y/o uso las presentes condiciones de uso.",
        "El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que el titular ofrece a través de este sitio web, con carácter enunciativo pero no limitativo, a no emplearlos para actividades ilícitas o contrarias a la buena fe y al orden público.",
      ],
    },
    {
      h: "Propiedad intelectual e industrial",
      p: [
        "Todos los contenidos del sitio web (textos, imágenes, vídeos, diseño gráfico, código fuente, logos, marcas, etc.) son titularidad de Daniel Acero Sagredo o dispone de los derechos de uso necesarios, quedando prohibida su reproducción, distribución o comunicación pública sin autorización expresa del titular.",
      ],
    },
    {
      h: "Responsabilidad",
      p: [
        "El titular no se hace responsable de los posibles errores u omisiones en los contenidos, ni de la falta de disponibilidad del sitio web, aunque se compromete a realizar los esfuerzos necesarios para evitar este tipo de situaciones.",
      ],
    },
    {
      h: "Legislación aplicable y jurisdicción",
      p: [
        "La relación entre el titular del sitio web y el usuario se regirá por la normativa vigente en España. Cualquier controversia se someterá a los Juzgados y Tribunales del domicilio del titular.",
      ],
    },
  ],
}

const en: typeof es = {
  metaTitle: "Legal Notice — A0Studios",
  metaDescription:
    "A0Studios legal notice: website owner details, terms of use, intellectual property, liability and applicable law.",
  courtesy: courtesyEn,
  h1: "Legal Notice",
  intro:
    "In compliance with Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE, Spain's Information Society Services and Electronic Commerce Act), users of this website are informed of the following details:",
  fields: [
    { k: "Website owner:", v: "Daniel Acero Sagredo" },
    { k: "Trade name:", v: "A0Studios" },
    { k: "DNI/NIF (tax ID):", v: "06590329R" },
    { k: "Address:", v: "Rda. de Atocha, 16, 7ºC esc dcha, 28012 Madrid, España" },
    { k: "Contact email:", v: "dani@a0studios.es" },
  ],
  sections: [
    {
      h: "Terms of use",
      p: [
        "Accessing and using this website confers the status of user, who from the moment of such access and/or use accepts these terms of use.",
        "The user undertakes to make appropriate use of the content and services that the owner offers through this website and, by way of example but not limitation, not to use them for unlawful activities or activities contrary to good faith and public order.",
      ],
    },
    {
      h: "Intellectual and industrial property",
      p: [
        "All content on the website (texts, images, videos, graphic design, source code, logos, trademarks, etc.) is owned by Daniel Acero Sagredo or used with the necessary rights of use. Reproduction, distribution or public communication without the express authorisation of the owner is prohibited.",
      ],
    },
    {
      h: "Liability",
      p: [
        "The owner is not liable for any errors or omissions in the content, nor for any unavailability of the website, although the owner undertakes to make the necessary efforts to avoid such situations.",
      ],
    },
    {
      h: "Applicable law and jurisdiction",
      p: [
        "The relationship between the website owner and the user shall be governed by the legislation in force in Spain. Any dispute shall be submitted to the Courts and Tribunals of the owner's place of residence.",
      ],
    },
  ],
}

export const legalAvisoContent = { es, en }
