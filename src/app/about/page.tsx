'use client';

import { Navbar } from "@/components/Navbar";
import { About } from "@/page/About";
import { Connect } from "@/page/Connect";
import { Footer } from "@/page/Footer";

const coreTeam = [
  { name: "Madhukar ", role: "Full-stack Engineer" },
  { name: "Takshil", role: "Full-stack Engineer" },
  { name: "Virpal", role: "Full-stack Engineer" },
  { name: "Sarbaz", role: "Full-stack Engineer" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden  text-[#212121]">
      <Navbar />

      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24 font-Neue">
        <p className="uppercase text-lg tracking-[0.4em] text-emerald-600 mb-6">
          About QalamWebStudio
        </p>
        <h1 className="text-4xl md:text-8xl font-bold leading-tight max-w-7xl">
          We are MCA grads building bold digital products for ambitious teams.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          From strategy to shipped experiences, we align engineering, design,
          and storytelling so brands look premium and feel effortless to use.
        </p>
      </section>

      <About />

      <section className="py-20 px-6 md:px-16 lg:px-24 font-Neue">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-12">
          <div>
            <p className="uppercase text-sm tracking-[0.4em] text-emerald-600 mb-4">
              Core Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              People behind the studio
            </h2>
          </div>
          <p className="max-w-xl text-slate-600">
            Every launch is crafted by founders who stay hands-on—from first
            Figma frames to production deploys—so you always work with decision
            makers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {coreTeam.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 px-6 py-8 shadow-sm"
            >
              <p className="text-2xl font-semibold">{member.name}</p>
              <p className="text-sm uppercase tracking-wide text-emerald-600 mt-2">
                {member.role}
              </p>
              <p className="mt-4 text-slate-600">
                Partnering with founders to ship products faster with taste,
                technical depth, and a bias for measurable results.
              </p>
            </div>
          ))}
        </div>
      </section>

      <Connect />
      <Footer />
    </main>
  );
}
