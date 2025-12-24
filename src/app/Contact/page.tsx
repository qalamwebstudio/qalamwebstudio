
'use client';

import { Suspense, useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import LocomotiveScroll from "locomotive-scroll";
import { Navbar } from "@/components/Navbar";
import { Connect } from "@/page/Connect";
import { Footer } from "@/page/Footer";

const contactChannels = [
  {
    label: "Email",
    value: "QalamWebStudio@gmail.com",
    helper: "Expect a response within 24 hours.",
  },
  {
    label: "Phone / WhatsApp",
    value: "+91 98765 43210",
    helper: "Call us 10 AM – 8 PM IST for new engagements.",
  },
  {
    label: "Studio HQ",
    value: "123 Startup Lane, Siddhpur, Gujarat 384151",
    helper: "Drop by with a prior appointment.",
  },
];

const DEFAULT_SERVICE_MESSAGE =
  "Visit our pricing section to select a specific service and get instant quotes!";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const selectedServiceRef = useRef<HTMLTextAreaElement | null>(null);
  const seededService = searchParams?.get("service") ?? "";
  const seededBudget = searchParams?.get("budget") ?? "";
  const seedValue = seededService
    ? `${decodeURIComponent(seededService)}${
        seededBudget ? ` — ${decodeURIComponent(seededBudget)}` : ""
      }`
    : "";
  const hasSeed = Boolean(seedValue);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    selectedService: seedValue || DEFAULT_SERVICE_MESSAGE,
    projectDetails: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

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

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      selectedService: seedValue || DEFAULT_SERVICE_MESSAGE,
    }));
  }, [seedValue]);

  useEffect(() => {
    if (!selectedServiceRef.current) return;
    const textarea = selectedServiceRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [formData.selectedService]);

  const handleFieldChange =
    (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
      if (status === "success") {
        setStatus("idle");
      }
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      console.table(formData);
      setStatus("success");
    }, 500);
  };

  return (
    <main 
      ref={scrollContainerRef}
      className="relative min-h-screen w-full overflow-x-hidden text-[#212121] font-Neue"
    >
      <div className="relative z-10">
        <Navbar />

        <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24">
        <p className="uppercase text-lg tracking-[0.45em] text-emerald-600 mb-6">
          Contact
        </p>
        <h1 className="text-4xl md:text-8xl font-bold leading-tight max-w-7xl">
          Tell us about the product, brand, or launch you&apos;re planning.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          We collaborate with founders and marketing teams worldwide. Choose the
          channel that works for you and we&apos;ll set up a workshop within 48
          hours.
        </p>
        </section>

        <section className="pb-20 px-4 md:px-16 lg:px-24">
          <div className="mx-auto grid gap-6 md:grid-cols-3">
            {contactChannels.map((channel) => (
              <article
                key={channel.label}
                className="group relative overflow-hidden rounded-[28px] border border-emerald-50 bg-gradient-to-br from-white via-white to-emerald-50 p-6 "
              >
                
                <div className="pl-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.45em] text-emerald-600 mb-3">
                    {channel.label}
                  </p>
                  <p className="text-2xl font-semibold text-[#111] leading-tight break-words">
                    {channel.value}
                  </p>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                    {channel.helper}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact-form" className="pb-20 px-4 md:px-16 lg:px-24">
        <div  className="rounded-[36px] border border-white/50 bg-gradient-to-br from-white via-white to-emerald-50 shadow-[0_35px_120px_rgba(15,23,42,0.15)] backdrop-blur-xl p-3 md:p-12 ">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6 p-6">
              <p className="uppercase text-sm tracking-[0.45em] text-emerald-600">
                Project Intake
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Share the essentials, and we&apos;ll craft a tailored roadmap in under
                48 hours.
              </h2>
              <p className="text-lg text-slate-600">
                We pair your inputs with our pricing intelligence to send you a
                detailed scope, milestones, and payment schedule. The more context you
                give, the faster we can start building.
              </p>
              <div className="grid gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 px-4 py-3 text-sm text-slate-600">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 font-semibold text-emerald-700">
                    1
                  </span>
                  Review pricing & pick a plan that matches your ambition.
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 px-4 py-3 text-sm text-slate-600">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 font-semibold text-emerald-700">
                    2
                  </span>
                  Tell us about your team, timelines, and success metrics.
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-100 px-4 py-3 text-sm text-slate-600">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 font-semibold text-emerald-700">
                    3
                  </span>
                  Receive a custom proposal plus a kickoff slot within two days.
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[28px] border border-white/50 bg-white/65 p-6 md:p-8 space-y-6 shadow-[inset_0_0_30px_rgba(255,255,255,0.25)] backdrop-blur-xl"
            >
              <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleFieldChange("name")}
                  placeholder="e.g. Your Name"
                  className="mt-2 w-full rounded-2xl border border-emerald-100/80 bg-white/80 px-4 py-3 text-base text-slate-800 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleFieldChange("email")}
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-2xl border border-emerald-100/80 bg-white/80 px-4 py-3 text-base text-slate-800 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={handleFieldChange("company")}
                  placeholder="Brand, startup, or team name"
                  className="mt-2 w-full rounded-2xl border border-emerald-100/80 bg-white/80 px-4 py-3 text-base text-slate-800 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 mb-3">
                  Selected Service &amp; Budget
                </label>
                <div className="rounded-[28px] border border-white/40 bg-white/65 px-5 py-4 backdrop-blur-xl">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-xl font-semibold text-emerald-700">
                      ₹
                    </div>
                    <div className="flex-1 space-y-2">
                      <textarea
                        ref={selectedServiceRef}
                        value={formData.selectedService}
                        onChange={handleFieldChange("selectedService")}
                        rows={1}
                        className="w-full resize-none overflow-hidden border border-transparent bg-transparent text-lg font-semibold leading-relaxed text-slate-900 placeholder:text-slate-500 focus:border-none focus:outline-none focus:ring-0"
                      />
                      <p className="text-sm text-slate-500">
                        {hasSeed
                          ? "We pre-filled this from your selected plan. Adjust the amount or naming if you need something more tailored."
                          : "Once you choose a plan, we’ll drop its title and quote right here for faster approvals."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Tell us about your project
                </label>
                <textarea
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleFieldChange("projectDetails")}
                  placeholder="Share goals, timelines, platforms, existing assets, or anything else you want us to know."
                  className="mt-2 w-full rounded-3xl border border-emerald-100/80 bg-white/80 px-4 py-3 text-base text-slate-800 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-3xl bg-emerald-600 px-6 py-4 text-lg font-semibold uppercase tracking-[0.3em] text-white transition-all duration-200 hover:bg-emerald-500 disabled:opacity-60"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send request"}
              </button>
              {status === "success" && (
                <p className="text-center text-sm font-medium text-emerald-600">
                  Thanks! We&apos;ll respond with a detailed proposal within 48 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

        <Connect />
        <Footer />
      </div>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ContactPageContent />
    </Suspense>
  );
}
