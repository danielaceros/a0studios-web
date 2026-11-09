import type { Courtesy } from "./legal-shared"
import { courtesyEn } from "./legal-shared"

const es = {
  metaTitle: "Política de Privacidad — A0Studios",
  metaDescription:
    "Política de privacidad de A0Studios: responsable, datos recogidos, finalidad, legitimación, conservación y derechos conforme al RGPD y la LOPDGDD.",
  courtesy: null as Courtesy,
  h1: "Política de Privacidad",
  intro:
    "En cumplimiento de lo dispuesto en el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa a los usuarios de este sitio web de los siguientes aspectos relacionados con el tratamiento de sus datos personales.",
  controllerH: "1. Responsable del tratamiento",
  controller: [
    { k: "Responsable:", v: "Daniel Acero Sagredo" },
    { k: "Nombre comercial:", v: "A0Studios" },
    { k: "DNI/NIF:", v: "06590329R" },
    { k: "Domicilio:", v: "Rda. de Atocha, 16, 7ºC esc dcha, 28012 Madrid, España" },
    { k: "Correo electrónico de contacto:", v: "dani@a0studios.es" },
  ],
  dataH: "2. Datos personales que se recogen",
  dataIntro: "A través de este sitio web se pueden recoger los siguientes datos personales:",
  data: [
    "Nombre y apellidos",
    "Dirección de correo electrónico",
    "Información incluida en los mensajes enviados a través de formularios o WhatsApp",
  ],
  purposeH: "3. Finalidad del tratamiento de los datos",
  purpose: [
    "Atender solicitudes de información o presupuestos.",
    "Gestionar la relación comercial o contractual.",
    "Responder consultas enviadas a través de los canales de contacto.",
  ],
  legalBasisH: "4. Legitimación para el tratamiento",
  legalBasis: [
    "El consentimiento del usuario al enviar sus datos.",
    "La ejecución de un contrato o precontrato.",
  ],
  retentionH: "5. Conservación de los datos",
  retention:
    "Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar posibles responsabilidades derivadas del tratamiento.",
  rightsH: "6. Derechos de los usuarios",
  rights: [
    "Acceder a sus datos personales",
    "Solicitar la rectificación de los datos inexactos",
    "Solicitar su supresión",
    "Solicitar la limitación del tratamiento",
    "Oponerse al tratamiento",
    "Solicitar la portabilidad de los datos",
  ],
  rightsHow: "Para ejercer estos derechos, el usuario puede enviar una solicitud al correo",
  securityH: "7. Medidas de seguridad",
  security:
    "El responsable ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.",
  changesH: "8. Cambios en la política de privacidad",
  changes:
    "El titular se reserva el derecho a modificar la presente política de privacidad para adaptarla a novedades legislativas o jurisprudenciales. Se recomienda al usuario revisar periódicamente esta política.",
}

const en: typeof es = {
  metaTitle: "Privacy Policy — A0Studios",
  metaDescription:
    "A0Studios privacy policy: data controller, personal data collected, purposes, legal basis, retention and rights under the GDPR and Spanish data protection law (LOPDGDD).",
  courtesy: courtesyEn,
  h1: "Privacy Policy",
  intro:
    "In compliance with Regulation (EU) 2016/679 (GDPR) and Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD, Spain's Organic Law on Personal Data Protection and the Guarantee of Digital Rights), users of this website are informed of the following aspects relating to the processing of their personal data.",
  controllerH: "1. Data controller",
  controller: [
    { k: "Controller:", v: "Daniel Acero Sagredo" },
    { k: "Trade name:", v: "A0Studios" },
    { k: "DNI/NIF (tax ID):", v: "06590329R" },
    { k: "Address:", v: "Rda. de Atocha, 16, 7ºC esc dcha, 28012 Madrid, España" },
    { k: "Contact email:", v: "dani@a0studios.es" },
  ],
  dataH: "2. Personal data collected",
  dataIntro: "The following personal data may be collected through this website:",
  data: [
    "First name and surname",
    "Email address",
    "Information included in messages sent through forms or WhatsApp",
  ],
  purposeH: "3. Purposes of the processing",
  purpose: [
    "Handling requests for information or quotes.",
    "Managing the commercial or contractual relationship.",
    "Answering enquiries sent through the contact channels.",
  ],
  legalBasisH: "4. Legal basis for the processing",
  legalBasis: [
    "The user's consent when submitting their data.",
    "The performance of a contract or pre-contract.",
  ],
  retentionH: "5. Data retention",
  retention:
    "Personal data will be kept for the time necessary to fulfil the purpose for which it was collected and to determine any liabilities arising from the processing.",
  rightsH: "6. User rights",
  rights: [
    "Access their personal data",
    "Request rectification of inaccurate data",
    "Request erasure",
    "Request restriction of processing",
    "Object to the processing",
    "Request data portability",
  ],
  rightsHow: "To exercise these rights, the user may send a request to the email address",
  securityH: "7. Security measures",
  security:
    "The controller has adopted the technical and organisational measures necessary to guarantee the security of personal data and to prevent its alteration, loss, unauthorised processing or unauthorised access.",
  changesH: "8. Changes to the privacy policy",
  changes:
    "The owner reserves the right to modify this privacy policy to adapt it to legislative or case-law developments. Users are advised to review this policy periodically.",
}

export const legalPrivacidadContent = { es, en }
