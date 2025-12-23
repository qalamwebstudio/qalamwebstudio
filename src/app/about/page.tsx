'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Navbar } from "@/components/Navbar";
import { About } from "@/page/About";
import { Connect } from "@/page/Connect";
import { Footer } from "@/page/Footer";

type CoreTeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const coreTeam: CoreTeamMember[] = [
  {
    id: 1,
    name: "Sarbaz",
    role: "Full-Stack Developer (Backend-Focused, System Architecture & APIs)",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Madhukar",
    role:
      "Lead Frontend Engineer & UI/UX Designer (Web, Mobile & Desktop Interfaces)",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Virpal",
    role:
      "Backend Engineer & AI/ML Developer (Scalable Systems & Intelligent Models)",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Takshil",
    role:
      "Social Media Manager & Creative Designer (Brand Strategy & Visual Identity)",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
];


type CardInfoProps = {
  member: CoreTeamMember;
};

function CardInfo({ member }: CardInfoProps) {
  return (
    <div className="bg-gradient-to-br from-white/80 via-emerald-400 to-emerald-600/60 shadow-[0_35px_120px_rgba(15,23,42,0.15)] backdrop-blur-xl relative h-[160px] rounded-2xl  flex items-center px-4">
      <p className="text-[#212121]  font-bold  leading-snug font-Neue  text-2xl">
        {member.name}
        <br />
        <span className="text-sm font-Neue text-[#4e4e4e]">{member.role}</span>
      </p>
      <span className="from-white/80 to-emerald-400/60 absolute top-3 right-3 w-8 h-8 rounded-full flex items-center bg-gradient-to-br justify-center text-sm">
        {member.id}
      </span>
    </div>
  );
}

type CardImageProps = {
  member: CoreTeamMember;
};

function CardImage({ member }: CardImageProps) {
  return (
    <div className="shadow-[0_35px_120px_rgba(15,23,42,0.15)] backdrop-blur-xl relative h-[320px] rounded-2xl border border-black/30 flex items-center justify-center">
      <Image
        src={member.image}
        alt={`${member.name} portrait`}
        width={220}
        height={280}
        className="h-full w-full object-cover rounded-xl"
      />

      <span className="from-white/80 to-emerald-400/60 absolute top-3 right-3 w-8 h-8 rounded-full flex items-center bg-gradient-to-br justify-center text-sm">
        {member.id}
      </span>
    </div>
  );
}

export default function AboutPage() {
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main
      ref={scrollContainerRef}
      className="min-h-screen w-full overflow-x-hidden  text-[#212121]"
    >
      <Navbar />

      <section className="pt-32 pb-44 px-6 md:px-16 lg:px-24 font-Neue">
        <p className="uppercase text-lg tracking-[0.4em] text-emerald-600 mb-6">
          About QalamWebStudio
        </p>
        <h1 className="text-4xl md:text-8xl font-bold leading-tight max-w-7xl">
          We design and build bold digital products for ambitious teams.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          From strategy to shipped experiences, we align engineering, design,
          and storytelling so brands look premium and feel effortless to use.
        </p>
      </section>

      <About />

      <section className="py-44 px-6 md:px-16 lg:px-24 font-Neue">
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

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">

            {coreTeam.map((member, idx) => (
              <div key={member.id} className="flex flex-col gap-6">
                {idx % 2 === 0 ? (
                  <>
                    <CardImage member={member} />
                    <CardInfo member={member} />
                  </>
                ) : (
                  <>
                    <CardInfo member={member} />
                    <CardImage member={member} />
                  </>
                )}
              </div>
            ))}
          </div>
      </section>
      <Connect />
      <Footer />
    </main>
  );
}
