import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import type { WorkLibraryCategory } from "@/data/work-library";

type LibraryTabId = WorkLibraryCategory;

type ShowcaseProject = {
  id: number;
  label: string;
  title: string;
  description: string;
  image: string;
  details: string[];
  libraryTab: LibraryTabId;
};

const projects: ShowcaseProject[] = [
  {
    id: 1,
    label: "WEBSITE",
    title: "Sell Smarter Online",
    description:
      "High-performance websites built to convert visitors into customers with speed, clarity, and SEO baked in.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Next.js + Tailwind build",
      "Conversion-focused layouts",
      "SEO & analytics ready",
    ],
    libraryTab: "website",
  },
  {
    id: 2,
    label: "MOBILE APP",
    title: "Book. Track. Pay.",
    description:
      "Cross-platform mobile apps that handle bookings, real-time tracking, and seamless digital payments.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    details: [
      "React Native & Expo",
      "Real-time notifications",
      "Offline-first experience",
    ],
    libraryTab: "mobileApp",
  },
  {
    id: 3,
    label: "UI/UX DESIGN",
    title: "Design That Thinks",
    description:
      "Intuitive and scalable UI/UX systems designed to simplify complex workflows and data-heavy products.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Design systems & components",
      "Interactive prototypes",
      "Accessibility-focused UX",
    ],
    libraryTab: "brandingMarketing",
  },
  {
    id: 4,
    label: "DESKTOP APP",
    title: "Retail, Simplified",
    description:
      "Powerful desktop applications that unify inventory, billing, and analytics into one reliable system.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Electron-based apps",
      "Offline-first sync",
      "Advanced reporting tools",
    ],
    libraryTab: "desktopApp",
  },
  {
    id: 5,
    label: "CUSTOM BUSINESS SOFTWARE",
    title: "Business Automation Core",
    description:
      "Tailored software solutions that automate operations, reduce manual work, and scale with your business.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Custom workflows",
      "Secure role-based access",
      "Scalable backend architecture",
    ],
    libraryTab: "customBusiness",
  },
  {
    id: 6,
    label: "STARTUP KIT",
    title: "Launch Faster",
    description:
      "Everything a startup needs to go live fast — from MVP development to payments and admin panels.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Rapid MVP delivery",
      "Auth, billing & CMS",
      "Startup-ready tech stack",
    ],
    libraryTab: "startupKit",
  },
  {
    id: 7,
    label: "LOGO & BRANDING",
    title: "Brand From Scratch",
    description:
      "Complete brand identity design that makes your business look credible, premium, and memorable.",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Logo & visual identity",
      "Color & typography system",
      "Brand guidelines",
    ],
    libraryTab: "brandingMarketing",
  },
  {
    id: 8,
    label: "BRAND CARDS & MARKETING",
    title: "Print That Performs",
    description:
      "High-impact marketing and print assets that strengthen your offline presence and brand recall.",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Business cards & collaterals",
      "Premium print quality",
      "Campaign-ready assets",
    ],
    libraryTab: "brandingMarketing",
  },
  {
    id: 9,
    label: "WHITE-LABEL SERVICES",
    title: "White-Label Power",
    description:
      "Dedicated white-label development teams that work as an extension of your agency or startup.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    details: [
      "NDA-secured delivery",
      "Flexible team scaling",
      "Weekly progress reporting",
    ],
    libraryTab: "customBusiness",
  },
];


export const Ourwork = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Initialize GSAP animations
    gsap.set(".project-label", { opacity: 0, scale: 0.5 });
  }, []);

  const handleProjectHover = (label: string, isEntering: boolean) => {
    if (isEntering) {
      setHoveredProject(label);
      gsap.to(".project-label", {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      setHoveredProject(null);
      gsap.to(".project-label", {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  };

  const handleViewProject = (tab: LibraryTabId) => {
    router.push(`/work/library?tab=${tab}`);
  };

  return (
    <section
      className="w-full bg-[#f1f1f1] text-[#212121] font-Neue p-[3.8vw] relative overflow-hidden"
      style={{ boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="w-full">
        <h1 className="text-[40px] md:text-[48px] lg:text-[52px] py-4">
          Our Projects
        </h1>
      </div>
      <div className="w-full h-[1px] bg-gray-400 mb-8"></div>

      {/* Floating project label - only show on desktop */}
      <div
        className="project-label fixed inset-0 pointer-events-none items-center justify-center z-50 hidden md:flex"
        style={{
          display: hoveredProject ? "flex" : "none",
          textAlign: "center",
        }}
      >
        <h2 className="text-[120px] font-bold text-black/10 m-auto hidden md:block">
          {hoveredProject}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full group "
              onMouseEnter={() => handleProjectHover(project.label, true)}
              onMouseLeave={() => handleProjectHover(project.label, false)}
            >
              <div className="flex items-center mb-4 text-sm font-semibold text-gray-800 tracking-wider uppercase">
                <span className="dot mr-2 w-2 h-2 bg-gray-700 rounded-full inline-block"></span>
                {project.label}
              </div>
              <div
                className="group from-white/80 via-white/60 to-emerald-50/60 min-h-[26rem] rounded-2xl border border-gray-300 overflow-hidden 
                transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl flex flex-col"
              >
                {/* Project Image */}
                <div className="relative m-4 mb-3 rounded-xl overflow-hidden aspect-[4/2]">
                  <Image
                    src={project.image}
                    alt={`${project.label} preview`}
                    fill
                    priority={project.id === 1}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Project Details */}
                <div className="flex-1 px-4 flex flex-col gap-3 pb-5">
                  <div>
                    <h3 className="text-lg font-semibold text-[#212121]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#212121] line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2 text-xs text-[#212121]/80 font-medium">
                    {project.details.map((detail) => (
                      <li
                        key={detail}
                        className="px-3 py-1 border border-[#212121]/15 rounded-full bg-white/80 backdrop-blur-sm"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleViewProject(project.libraryTab)}
                    className="mt-auto inline-flex items-center justify-center gap-2 self-end rounded-full border border-[#212121] bg-[#212121] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-x-1 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    aria-label={`View details for ${project.title}`}
                  >
                    View project
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full items-center justify-center my-10 mt-24 ">
        <div className="flex flex-col items-center justify-center space-y-4">
          <button
            onClick={() => router.push("/work/library")}
            className="overflow-hidden group flex items-center justify-center pl-8 pr-6 py-4 border bg-[#212121] hover:bg-black text-white rounded-full transition-colors  duration-200 cursor-pointer "
          >
            <span className="z-10">View all our work</span> 
            <div className="relative ml-8 w-2 h-2 group-hover:scale-500 bg-white duration-200 rounded-full">
              <ArrowUpRight className="absolute w-2 h-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
