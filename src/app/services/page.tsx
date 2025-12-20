
'use client';
import { Navbar } from "@/components/Navbar";
import { Modelprice } from "@/page/Modelprice";
import { Connect } from "@/page/Connect";
import { Footer } from "@/page/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden text-[#212121]">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:mb-24 md:px-16 lg:px-24 font-Neue ">
        <p className="uppercase text-lg tracking-[0.4em] text-emerald-600 mb-16">
          Services
        </p>
        <h1 className="text-4xl md:text-8xl font-bold leading-tight max-w-7xl">
          Tailored product, branding, and engineering teams on demand.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-slate-600">
          Choose a plan that matches your roadmap. We scale from landing pages
          and brand refreshes to complex SaaS, marketplace, and mobile builds.
        </p>
      </section>
      <Modelprice />
      <Connect />
      <Footer />
    </main>
  );
}
