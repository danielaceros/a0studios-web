"use client";

const PHONE = "34711255496";
const MESSAGE = encodeURIComponent("Hola, quiero pedir presupuesto para grabar en el rooftop");

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-5 z-[55] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8 sm:h-[60px] sm:w-[60px]"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white sm:h-8 sm:w-8">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958a15.9 15.9 0 0 0 8.832 2.666C24.826 31.998 32 24.822 32 15.994 32 7.176 24.826 0 16.004 0zm9.338 22.594c-.39 1.1-2.274 2.104-3.14 2.168-.788.058-1.552.374-5.236-1.12-4.436-1.8-7.222-6.38-7.44-6.676-.218-.296-1.78-2.37-1.78-4.52 0-2.15 1.126-3.208 1.526-3.646.39-.428.86-.536 1.148-.536.286 0 .572.004.822.016.264.012.618-.1.968.74.36.86 1.226 2.982 1.336 3.2.108.218.18.474.034.762-.146.296-.218.474-.436.734-.218.26-.458.58-.654.778-.218.218-.444.454-.192.89.252.436 1.126 1.858 2.42 3.01 1.66 1.48 3.06 1.938 3.496 2.156.436.218.692.182.946-.11.26-.296 1.1-1.282 1.392-1.724.292-.436.584-.364.984-.218.4.146 2.538 1.198 2.974 1.416.436.218.726.328.834.508.108.182.108 1.038-.282 2.138z" />
      </svg>
    </a>
  );
}
