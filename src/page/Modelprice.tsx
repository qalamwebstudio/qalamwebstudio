import React, { useState } from "react";

// --- Data extracted and structured from the provided CSV file ---
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

// --- Helper Components ---

const CheckIcon = () => (
    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
);

const PricingCard = ({ plan }) => (
    <div className={`relative bg-white border border-slate-200 rounded-2xl p-8 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
        {plan.popular && (
            <div className="absolute top-0 right-8 -mt-4 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                BEST VALUE
            </div>
        )}
        <h3 className="text-xl font-bold text-slate-800 mb-2">{plan.name}</h3>
        <p className="text-4xl font-extrabold text-slate-900 mb-2">{plan.price}</p>
        <p className="text-slate-500 font-medium mb-6">{plan.details}</p>
        <button className="w-full mt-auto bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
            Get Quote
        </button>
    </div>
);

// --- Main App Component ---

function App() {
  const [activeTab, setActiveTab] = useState('consulting');
  const tabs = [
    { id: 'consulting', name: 'Consulting' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'saas', name: 'SaaS Add-Ons' },
    { id: 'whiteLabel', name: 'White-Label' },
  ];

  const activeData = pricingData[activeTab];

  return (
    <div className="min-h-screen font-Neue">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl  mb-4 tracking-tight">
            eMTrix Pricing Model
          </h1>
          <p className="text-lg text-slate-600">
            Flexible solutions for every stage of your business. From simple websites to complex applications, we've got you covered.
          </p>
        </header>

        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-xl shadow-md border border-slate-200 flex space-x-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-6 py-3 text-sm md:text-base font-semibold rounded-lg transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.name}
              </button>
            ))}
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
                                <p className="text-slate-500 font-medium">{activeData.note}</p>
                            </div>
                            <div className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 md:mt-0">
                                {activeData.estimatedPrice}
                            </div>
                        </div>
                        <div className="border-t border-slate-200 pt-6">
                            <p className="font-semibold text-slate-700 mb-4">What's included:</p>
                            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                {activeData.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <CheckIcon />
                                        <span className="text-slate-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div className="mt-8">
                             <button className="w-full bg-slate-900 text-white font-semibold py-4 px-6 rounded-lg hover:bg-emerald-600 transition-colors duration-300 text-lg">
                                 Request a Custom Quote
                             </button>
                         </div>
                    </div>
                 </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activeData.plans.map(plan => (
                        <PricingCard key={plan.name} plan={plan} />
                    ))}
                </div>
            )}
        </main>
      </div>
    </div>
  );
}

export const Modelprice = App;
