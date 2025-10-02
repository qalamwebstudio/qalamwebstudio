import React, { useState, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowUpRight } from 'lucide-react';
import { Navigation } from 'swiper/modules';

const pricingData = {
  consulting: {
    title: "Service-Based Consulting",
    description: "Custom solutions tailored to your specific business needs. We build from the ground up to deliver performance and scalability.",
    plans: [
      { name: "Static Website (3-5 pages)", price: "₹2,500 – ₹8,000", details: "Simple responsive site with a contact form." },
      { name: "Business Website", price: "₹8,000 – ₹15,000", details: "Up to 8 pages, SEO-ready, with animations.", popular: true },
      { name: "Basic Android App", price: "₹10,000 – ₹20,000", details: "3-5 screens with a reliable Firebase backend." },
      { name: "Desktop App (Mini Tool)", price: "₹8,000 – ₹18,000", details: "Built with Python/Electron, using a local database." },
      { name: "Admin Panel (UI + Firebase)", price: "₹10,000 – ₹20,000", details: "React UI connected to a flexible backend." },
      { name: "API/DB Integration", price: "₹5,000 – ₹15,000", details: "Node.js with Firebase or MongoDB integration." },
      { name: "Cloud Setup & Hosting", price: "₹4,000 – ₹10,000", details: "Includes domain, hosting, and SSL certificate setup." },
    ]
  },
  ecommerce: {
    title: "E-commerce Website",
    description: "A complete, feature-rich online store designed to convert visitors into customers and grow your business.",
    estimatedPrice: "₹12,000 – ₹20,000",
    note: "Based on total pages & specific features",
    features: [
        "Product Pages, Cart & Checkout",
        "Secure Payment Gateway Integration",
        "Category-wise Product Filters",
        "Coupon Codes & Discount System",
        "Fully Responsive Design",
        "Admin Dashboard (Orders/Products)",
        "SEO Plugin & Sitemap",
        "Basic Speed Optimization",
    ]
  },
  saas: {
    title: "SaaS Add-Ons",
    description: "Powerful, ready-to-integrate tools to enhance your existing applications and workflows.",
    plans: [
      { name: "Admin Panel Generator", price: "₹15,000", details: "Lifetime license. Generate powerful admin panels quickly." },
      { name: "Booking Tool", price: "₹1,000/mo or ₹20,000", details: "Monthly subscription or one-time purchase.", popular: true },
      { name: "Invoice System", price: "₹4,000", details: "One-time purchase for streamlined invoicing." },
      { name: "Feedback Widget", price: "₹2,500", details: "One-time purchase to gather user feedback easily." },
    ]
  },
  whiteLabel: {
    title: "White-Label Solutions",
    description: "Fully-coded, customizable, and ready-to-deploy application templates. Get to market faster with our robust solutions.",
    plans: [
      { name: "Delivery App Template", price: "₹30,000 – ₹50,000", details: "Firebase-based, full source code, and documentation.", popular: true },
      { name: "POS System", price: "₹25,000 – ₹45,000", details: "Invoice system, local DB, and multi-store support." },
      { name: "Portfolio Builder", price: "₹12,000 – ₹20,000", details: "Static HTML or React-based portfolio generator." },
      { name: "Agency Website", price: "₹20,000 – ₹40,000", details: "Multi-page, SEO-optimized, with a dynamic CMS." },
      { name: "Blog CMS", price: "₹15,000 – ₹30,000", details: "CMS/Firebase based with a complete admin panel." },
    ]
  }
};

// Memoized CheckIcon to prevent unnecessary re-renders
const CheckIcon = React.memo(() => (
  <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
));
CheckIcon.displayName = 'CheckIcon';

type PricingPlan = {
  name: string;
  price: string;
  details?: string;
  popular?: boolean;
};

const PricingCardComponent = ({ plan }: { plan: PricingPlan }) => {
  const handleSelect = useCallback(() => {
    // Add selection logic here
    console.log('Selected plan:', plan.name);
  }, [plan.name]);

  return (
    <div className="relative bg-white rounded-xl shadow p-6 flex flex-col min-h-[220px] mx-auto hover:shadow-lg transition-shadow duration-300">
      {plan.popular && (
        <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          BEST VALUE
        </div>
      )}
      <h3 className="text-base font-semibold text-gray-700 mb-2 tracking-tight">{plan.name}</h3>
      <div className="mb-2">
        <span className="text-3xl font-extrabold">{plan.price}</span>
      </div>
      <button 
        onClick={handleSelect}
        className="w-full cursor-pointer bg-[#212121] hover:bg-emerald-600 text-white py-2 rounded font-semibold text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
        aria-label={`Select ${plan.name} plan`}
      >
        Select
      </button>
      <p className="text-sm text-gray-700 mt-3 flex-1">{plan.details}</p>
    </div>
  );
};

PricingCardComponent.displayName = 'PricingCard';

const PricingCard = React.memo(PricingCardComponent);

const ModelpriceComponent = () => {
  const [activeTab, setActiveTab] = useState<'consulting' | 'ecommerce' | 'saas' | 'whiteLabel'>('ecommerce');
  
  // Memoized tabs configuration
  const tabs = useMemo(() => [
    { id: 'consulting', name: 'Consulting' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'saas', name: 'SaaS Add-Ons' },
    { id: 'whiteLabel', name: 'White-Label' },
  ], []);
  
  // Memoized pricing data
  const memoPricingData = useMemo(() => pricingData, []);
  const activeData = memoPricingData[activeTab];

  // Memoized event handlers
  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId as typeof activeTab);
  }, []);

  const handleQuoteRequest = useCallback(() => {
    // Add quote request logic here
    console.log('Quote requested for:', activeData.title);
  }, [activeData.title]);

  const handleViewWork = useCallback(() => {
    // Add view work logic here
    console.log('View all work clicked');
  }, []);

  return (
    <div className="min-h-screen font-Neue px-2">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl mb-4 tracking-tight">eMTrix Pricing Model</h1>
          <p className="text-lg text-slate-600">Flexible solutions for every stage of your business.</p>
        </header>

        {/* Tabs: dropdown on mobile, horizontal on desktop, styled as in reference */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-5xl justify-center flex">
            {/* Mobile: dropdown */}
            <div className="md:hidden">
              <select
                className="w-full p-3 rounded-xl border border-slate-200 shadow text-base font-semibold bg-white"
                value={activeTab}
                onChange={e => handleTabChange(e.target.value)}
              >
                {tabs.map(tab => (
                  <option key={tab.id} value={tab.id}>{tab.name}</option>
                ))}
              </select>
            </div>
            {/* Desktop/tablet: horizontal tabs with bar */}
            <div className="hidden md:flex md:w-[70%]  bg-white rounded-2xl justify-between shadow-lg border border-slate-200 px-4 py-3 space-x-4 items-center">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-7 py-2 text-base font-semibold rounded-lg transition-colors duration-300 focus:outline-none ${
                    activeTab === tab.id
                      ? 'bg-emerald-600 text-white shadow'
                      : 'text-[#212121] hover:bg-emerald-50'
                  }`}
                  style={{ minWidth: 120 }}
                  aria-label={`Switch to ${tab.name} tab`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <main>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{activeData.title}</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">{activeData.description}</p>
          </div>

          {activeTab === 'ecommerce' ? (
            <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="md:flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Complete E-commerce Solution</h3>
                    <p className="text-slate-500 font-medium">{(activeData as typeof pricingData.ecommerce).note}</p>
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 md:mt-0">{(activeData as typeof pricingData.ecommerce).estimatedPrice}</div>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <p className="font-semibold text-slate-700 mb-4">What&apos;s included:</p>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                    {(activeData as typeof pricingData.ecommerce).features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <CheckIcon />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <button 
                    onClick={handleQuoteRequest}
                    className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                    aria-label="Request a custom quote for e-commerce solution"
                  >
                    Request a Custom Quote
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-[85%] mx-auto [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] overflow-hidden">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1.1}
                breakpoints={{
                  640: { slidesPerView: 1.5 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {(activeData as { plans: PricingPlan[] }).plans.map((plan: PricingPlan) => (
                  <SwiperSlide key={plan.name}><PricingCard plan={plan} /></SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

            <div className='relative w-full items-center justify-center my-10 mt-24 '>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <button 
                      onClick={handleViewWork}
                      className="group flex items-center justify-center pl-8 pr-6 py-4 border bg-[#212121] hover:bg-black text-white rounded-full transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                      aria-label="View all our work"
                    >
                        View all our work
                        <div className='relative ml-8 w-2 h-2 group-hover:scale-500 bg-white duration-200 rounded-full'>
                            <ArrowUpRight className="absolute w-2 h-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </button>
                </div>
            </div>
        </main>
      </div>
    </div>
  );
};

ModelpriceComponent.displayName = 'Modelprice';

export const Modelprice = React.memo(ModelpriceComponent);
