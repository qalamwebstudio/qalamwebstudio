
'use client';

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

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden text-[#212121] font-Neue">
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

      <section className="pb-20 px-6 md:px-16 lg:px-24 grid gap-8 md:grid-cols-3">
        {contactChannels.map((channel) => (
          <div
            key={channel.label}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-600 mb-4">
              {channel.label}
            </p>
            <p className="text-2xl font-semibold break-words">{channel.value}</p>
            <p className="mt-3 text-slate-500 text-sm">{channel.helper}</p>
          </div>
        ))}
      </section>

      <Connect />
      <Footer />
    </main>
  );
}
