import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Founder from "@/components/sections/Founder";
import SocialProof from "@/components/sections/SocialProof";
import Beneficios from "@/components/sections/Beneficios";

const QueEs = dynamic(() => import("@/components/sections/QueEs"), {
  loading: () => <div className="min-h-[600px]" />,
});

const Comparativa = dynamic(() => import("@/components/sections/Comparativa"), {
  loading: () => <div className="min-h-[500px]" />,
});

const VirtualTour = dynamic(() => import("@/components/sections/VirtualTour"), {
  loading: () => <div className="min-h-[600px]" />,
});

const Proceso = dynamic(() => import("@/components/sections/Proceso"), {
  loading: () => <div className="min-h-[700px]" />,
});

const Tarifas = dynamic(() => import("@/components/sections/Tarifas"), {
  loading: () => <div className="min-h-[800px]" />,
});

const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <div className="min-h-[600px]" />,
});

const CTA = dynamic(() => import("@/components/sections/CTA"), {
  loading: () => <div className="min-h-[500px]" />,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <SocialProof />
        <QueEs />
        <Beneficios />
        <Comparativa />
        <VirtualTour />
        <Proceso />
        <Tarifas />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
