// Textos en inglés de los items de formatos.ts (ES es la fuente de verdad).
// Solo se traduce el alt; ids, src y poster se heredan del dato español.
export type FormatoId =
  | "bts-dron-1" | "bts-dron-2" | "bts-dron-3" | "bts-dron-4"
  | "bts-set-1" | "bts-set-2" | "bts-foto-1" | "bts-set-3" | "bts-set-4"
  | "bts-foto-2" | "bts-set-5" | "bts-set-6" | "bts-set-7" | "bts-foto-3"
  | "bts-set-8" | "bts-set-9"
  | "resultado-vertical-ad-1" | "resultado-vertical-ad-2"
  | "resultado-vsl-horizontal"
  | "resultado-reel-1" | "resultado-reel-2" | "resultado-reel-3" | "resultado-reel-4"
  | "resultado-reel-5" | "resultado-reel-6" | "resultado-reel-7";

export const FORMATOS_ALT_EN: Record<FormatoId, string> = {
  "bts-dron-1": "Aerial drone view of the A0Studios penthouse",
  "bts-dron-2": "Vertical aerial drone view of the terrace",
  "bts-dron-3": "Vertical aerial drone view of the building",
  "bts-dron-4": "Vertical aerial drone view of the Madrid skyline",
  "bts-set-1": "Behind the scenes during a shoot at A0Studios",
  "bts-set-2": "Setting up the set before filming",
  "bts-foto-1": "Photo of the filming set at A0Studios",
  "bts-set-3": "Crew adjusting the camera during a session",
  "bts-set-4": "Filming in progress at the penthouse",
  "bts-foto-2": "Photo of the penthouse during a shoot",
  "bts-set-5": "Behind the scenes, directing the session",
  "bts-set-6": "A moment of filming on the podcast set",
  "bts-set-7": "Wide shot of the set during filming",
  "bts-foto-3": "Photo of the A0Studios space between takes",
  "bts-set-8": "Behind the scenes, adjusting the lights",
  "bts-set-9": "Wide shot of the penthouse during the session",
  "resultado-vertical-ad-1": "Edited vertical ad, final result of a session at A0Studios",
  "resultado-vertical-ad-2": "Second edited vertical ad, final result",
  "resultado-vsl-horizontal": "Edited widescreen VSL, final result shot at A0Studios",
  "resultado-reel-1": "Published Reel, final edited result",
  "resultado-reel-2": "Published Reel, final edited result",
  "resultado-reel-3": "Published Reel, final edited result",
  "resultado-reel-4": "Client Reel shot at A0Studios, final edited result",
  "resultado-reel-5": "Client Reel shot at A0Studios, final edited result",
  "resultado-reel-6": "Brand Reel shot at A0Studios, final edited result",
  "resultado-reel-7": "Brand Reel shot at A0Studios, final edited result",
};
