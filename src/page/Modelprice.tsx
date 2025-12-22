import React, { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, ArrowRight } from "lucide-react";

type PricingPlan = {
  name: string;
  price: string;
  details?: string | string[];
  popular?: boolean;
};

type PricingCategory = {
  title: string;
  description: string;
  note?: string;
  features: string[];
  plans: PricingPlan[];
};

type PricingCategoryKey =
  | "websiteDevelopment"
  | "mobileApps"
  | "desktopSoftware"
  | "redesign"
  | "brandMarketing"
  | "startupKit"
  | "whiteLabel";

const pricingData: Record<PricingCategoryKey, PricingCategory> = {
  websiteDevelopment: {
    title: "Website Development",
    description:
      "High-performance, responsive, and SEO-ready websites built to represent your brand professionally.",
    note: "Perfect for serious commerce teams that need storefront, payments and fulfillment baked in.",
    plans: [
      {
        name: "Static Website (3–5 Pages)",
        price: "₹2,500 – ₹8,000",
        details: [
          "3–5 responsive pages with clean layout",
          "Mobile, tablet & desktop friendly design",
          "Contact form with basic validation",
          "Fast loading and simple navigation",
          "Best for small businesses and local services",
        ],
      },
      {
        name: "Business Website",
        price: "₹8,000 – ₹15,000",
        details: [
          "Up to 8 professionally designed pages",
          "Modern animations and smooth transitions",
          "SEO-ready structure for better search ranking",
          "Optimized performance and loading speed",
          "Designed to convert visitors into leads",
        ],
        popular: true,
      },
      {
        name: "Portfolio / Personal Website",
        price: "₹4,000 – ₹10,000",
        details: [
          "Modern and personal branding-focused design",
          "Showcase skills, projects, or personal brand",
          "Clean UI with smooth scrolling experience",
          "Fully responsive across all devices",
          "Ideal for freelancers, creators, and professionals",
        ],
      },
      {
        name: "Custom Website",
        price: "₹15,000+",
        details: [
          "Fully custom UI/UX tailored to business needs",
          "Advanced features and custom functionality",
          "Scalable structure for future growth",
          "High-performance and security-focused setup",
          "Perfect for startups and growing brands",
        ],
      },
    ],
    features: [
      "High-performance storefront built with modern frameworks",
      "Secure checkout, payments, and order management",
      "Inventory, fulfillment, and admin dashboard integration",
      "SEO, speed, and conversion optimization",
      "Post-launch monitoring, analytics, and growth support",
    ],
  },

  mobileApps: {
    title: "Mobile App Development",
    description:
      "Reliable and scalable mobile applications with clean UI and strong backend support.",
    features: [
      "High-quality UI/UX crafted for Android & iOS platforms",
      "Scalable backend integration with Firebase or RESTful APIs",
      "Secure authentication, data storage, and app workflows",
      "Performance optimization and device-level testing",
      "End-to-end Play Store / App Store deployment with analytics",
    ],
    plans: [
      {
        name: "Basic Android App",
        price: "₹10,000 – ₹20,000",
        details: [
          "3–5 essential app screens with clean and modern UI",
          "Firebase backend setup (Auth + Database)",
          "Basic user authentication (Login / Signup)",
          "Smooth performance with standard testing",
          "Best suited for MVPs and early-stage startups",
        ],
        popular: true,
      },
      {
        name: "Business Mobile App",
        price: "₹20,000 – ₹40,000",
        details: [
          "Complete business-ready mobile application",
          "Secure authentication & role-based access",
          "REST API integration with database",
          "Admin panel for content & user management",
          "Push notifications & basic analytics",
          "Play Store deployment support",
        ],
      },
      {
        name: "Custom App",
        price: "₹40,000+",
        details: [
          "Fully custom, feature-rich mobile application",
          "Scalable and future-ready architecture",
          "Advanced integrations (APIs, payments, third-party tools)",
          "Performance optimization & security best practices",
          "Custom UI/UX tailored to business goals",
          "Long-term scalability and upgrade support",
        ],
      },
    ],
  },

  desktopSoftware: {
    title: "Desktop Software",
    description:
      "Lightweight and powerful desktop applications built for productivity.",
    features: [
      "Offline-ready workflows with local storage",
      "Auto-update pipelines & signed installers",
      "Performance profiling for heavy operations",
    ],
    plans: [
      {
        name: "Mini Desktop Tool",
        price: "₹8,000 – ₹18,000",
        details: "Python/Electron with local database.",
        popular: true,
      },
      {
        name: "Business Desktop Software",
        price: "₹20,000 – ₹40,000",
        details: "Advanced workflows & reporting.",
      },
    ],
  },

  redesign: {
    title: "Website Redesign",
    description:
      "Upgrade outdated websites with modern UI, speed, and usability improvements.",
    features: [
      "Figma-first redesign with collaborative reviews",
      "Accessibility, SEO, and conversion audits",
      "Migration support without downtime",
    ],
    plans: [
      {
        name: "UI Refresh",
        price: "₹4,000 – ₹8,000",
        details: "Design improvements only.",
      },
      {
        name: "Full Redesign",
        price: "₹10,000 – ₹20,000",
        details: "UI + performance + SEO fixes.",
        popular: true,
      },
    ],
  },

  startupKit: {
    title: "Startup Kit",
    description:
      "Everything a startup needs to launch fast and look professional.",
    features: [
      "Modern marketing site with conversion-ready copy",
      "Logo, pitch deck slides, and investor assets",
      "Automation setup for CRM, email, and analytics",
    ],
    plans: [
      {
        name: "Basic Startup Kit",
        price: "₹15,000 – ₹25,000",
        details: "Website + logo + hosting setup.",
      },
      {
        name: "Pro Startup Kit",
        price: "₹30,000 – ₹50,000",
        details: "Website + logo, mobile or Desktop app for billing, branding and banners cards",
        popular: true,
      },
    ],
  },

  whiteLabel: {
    title: "White-Label Services",
    description:
      "Fully built, customizable solutions ready for resale or quick deployment.",
    features: [
      "Source code ownership with documentation",
      "Multi-tenant architecture + branding switches",
      "Team training and resale enablement",
    ],
    plans: [
      {
        name: "Delivery App Template",
        price: "₹30,000 – ₹50,000",
        details: "Full source code with Firebase.",
        popular: true,
      },
      {
        name: "POS System",
        price: "₹25,000 – ₹45,000",
        details: "Billing, inventory & multi-store.",
      },
      {
        name: "Agency Website",
        price: "₹20,000 – ₹40,000",
        details: "CMS-powered & SEO-optimized.",
      },
    ],
  },

  brandMarketing: {
    title: "Branding & Marketing",
    description:
      "Identity, collateral, and campaign assets crafted to keep your brand consistent everywhere.",
    features: [
      "Multiple logo concepts with structured revisions",
      "Complete guidelines for color, typography & usage",
      "Print + digital ready exports across platforms",
      "Fast creative turnarounds with direct collaboration",
    ],
    plans: [
      {
        name: "Logo Design",
        price: "₹2,000 – ₹5,000",
        details: "Custom logo with source files.",
      },
      {
        name: "Brand Identity Kit",
        price: "₹6,000 – ₹12,000",
        details: "Logo, colors, typography & guidelines.",
        popular: true,
      },
      {
        name: "Visiting / Brand Card Design",
        price: "₹1,000 – ₹3,000",
        details: "Print-ready & digital formats.",
      },
      {
        name: "Social Media Creatives",
        price: "₹2,000 – ₹6,000",
        details: "Custom posts & banners for campaigns.",
      },
    ],
  },
};

// Memoized CheckIcon to prevent unnecessary re-renders
const CheckIcon = React.memo(() => (
  <svg
    className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
));
CheckIcon.displayName = "CheckIcon";

const PricingCardComponent = ({
  plan,
  onSelectPlan,
}: {
  plan: PricingPlan;
  onSelectPlan: (plan: PricingPlan) => void;
}) => {
  return (
    <div
      className={`relative rounded-3xl border border-slate-200 bg-gradient-to-br from-white/80 via-white/60 to-emerald-50/60 shadow-[0_35px_120px_rgba(15,23,42,0.15)] backdrop-blur-xl ring-1 ring-transparent  px-7 py-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:ring-emerald-600`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-semibold tracking-wide px-4 py-1 rounded-full shadow-lg">
          Most Picked
        </span>
      )}

      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          {plan.name}
        </p>
        <p className="text-4xl md:text-5xl font-bold mt-3 text-[#212121]">
          {plan.price}
        </p>
      </div>

      {Array.isArray(plan.details) ? (
        <ul className="text-sm text-slate-600 flex-1 list-disc space-y-1 pl-5">
          {plan.details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-slate-600 flex-1">{plan.details}</p>
      )}

      <button
        onClick={() => onSelectPlan(plan)}
        className="mt-2 w-full inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:bg-[#212121f2] hover:text-white"
        aria-label={`Select ${plan.name} plan`}
      >
        Choose plan
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
};

PricingCardComponent.displayName = "PricingCard";

const PricingCard = React.memo(PricingCardComponent);

const ModelpriceComponent = () => {
  const [activeTab, setActiveTab] = useState<PricingCategoryKey>(
    "mobileApps"
  );
  const router = useRouter();

  const tabs = useMemo(
    () => [
      { id: "websiteDevelopment", name: "Website" },
      { id: "mobileApps", name: "Mobile App" },
      { id: "desktopSoftware", name: "Desktop" },
      { id: "redesign", name: "Redesign" },
      { id: "brandMarketing", name: "Branding & Marketing" },
      { id: "startupKit", name: "Startup Kit" },
      { id: "whiteLabel", name: "White Label" },
    ],
    []
  );

  const memoPricingData = useMemo(() => pricingData, []);
  const activeData = memoPricingData[activeTab];


  // Memoized event handlers
  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId as typeof activeTab);
  }, []);

  const handleQuoteRequest = useCallback(() => {
    // Add quote request logic here
    console.log("Quote requested for:", activeData.title);
  }, [activeData.title]);

  const handleViewWork = useCallback(() => {
    // Add view work logic here
    console.log("View all work clicked");
  }, []);

  const handlePlanSelect = useCallback(
    (plan: PricingPlan) => {
      const params = new URLSearchParams();
      params.set("service", plan.name);
      params.set("budget", plan.price);
      router.push(`/Contact?${params.toString()}`);
    },
    [router]
  );

  return (
    <section id="modelprice" className="relative isolate overflow-hidden  py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 "></div>
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:url('https://www.toptal.com/designers/subtlepatterns/uploads/dots.png')] mix-blend-multiply"></div>
      <div className="relative mx-auto max-w-6xl px-4">
        <header className="text-center">
          <p className="inline-flex items-center rounded-full border border-slate-200 bg-[#f1f1f1] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
            QalamWebStudio pricing
          </p>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-[#212121]">
            Build, launch & grow with confidence
          </h1>
          <p className="mt-4 text-lg text-[#212121]">
            Website, mobile app, SaaS & more — pick a track above and explore
            curated plans.
          </p>
        </header>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition-all duration-300 ${isActive
                  ? "border-neutral-900 bg-neutral-900 text-white shadow-lg shadow-slate-300/60"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-neutral-900"
                  }`}
                aria-label={`Switch to ${tab.name} pricing`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        <article className="mt-14 rounded-[40px] border border-slate-100 bg-[#f1f1f1] shadow-[0_35px_120px_rgba(15,23,42,0.15)] backdrop-blur-xl p-10 ">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                {activeData.title}
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                {activeData.description}
              </h2>
              {activeData.note && (
                <p className="mt-3 rounded-2xl bg-slate-900/5 px-4 py-2 text-sm text-slate-600">
                  {activeData.note}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                onClick={handleQuoteRequest}
                className="group flex items-center justify-center pl-6 pr-6 py-3 border border-black bg-black hover:bg-transparent  text-white hover:text-black rounded-full transition-colors  duration-200 cursor-pointer"
              >
                Request quote
                <div className="relative ml-8 w-2 h-2 group-hover:scale-500 bg-[#f1f1f1] duration-200 rounded-full">
                  <ArrowUpRight className="absolute w-2 h-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
              <a
                onClick={handleViewWork}
                className="group flex items-center justify-center pl-6 pr-6 py-3 border border-black bg-transparent hover:bg-black  text-black hover:text-white rounded-full transition-colors  duration-200 cursor-pointer"
              >
                View recent work
                <div className="relative ml-4 w-2 h-2 group-hover:scale-500 bg-black  duration-200 rounded-full">
                  <ArrowUpRight className="absolute w-2 h-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {activeData.plans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                onSelectPlan={handlePlanSelect}
              />
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-100 bg-[#f8f8f8] px-6 py-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#212121]">
              In every package, inclusive
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {activeData.features.map((feature) => (
                <div key={feature} className="flex items-start text-sm text-[#212121]">
                  <CheckIcon />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

ModelpriceComponent.displayName = "Modelprice";

export const Modelprice = React.memo(ModelpriceComponent);
