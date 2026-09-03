import dynamic from "next/dynamic";

import Nav from "@/components/a0/Nav";
import Hero from "@/components/a0/Hero";
import LogoStrip from "@/components/a0/LogoStrip";
import Estudio from "@/components/a0/Estudio";
import Formatos from "@/components/a0/Formatos";
import Footer from "@/components/a0/Footer";

const Trabajos = dynamic(() => import("@/components/a0/Trabajos"));
const Espacio = dynamic(() => import("@/components/a0/Espacio"));
const Proceso = dynamic(() => import("@/components/a0/Proceso"));
const Precios = dynamic(() => import("@/components/a0/Precios"));
const Testimonios = dynamic(() => import("@/components/a0/Testimonios"));
const Faq = dynamic(() => import("@/components/a0/Faq"));
const Contacto = dynamic(() => import("@/components/a0/Contacto"));

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <Estudio />
        <Formatos />
        <Trabajos />
        <Espacio />
        <Proceso />
        <Precios />
        <Testimonios />
        <Faq />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
