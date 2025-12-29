import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | QalamWebStudio",
  description:
    "Explore QalamWebStudio's on-demand product, branding, and engineering teams. We craft SaaS, marketplaces, mobile apps, and custom platforms tailored to your roadmap.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | QalamWebStudio",
    description:
      "Choose a QalamWebStudio plan that matches your roadmap—from brand refreshes to large-scale SaaS builds.",
    url: "https://qalamwebstudio.online/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
