'use client';

export type WorkLibraryCategory =
  | 'website'
  | 'mobileApp'
  | 'desktopApp'
  | 'customBusiness'
  | 'brandingMarketing'
  | 'startupKit';

export type WorkLibraryProject = {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  stack: string;
  heroImage: string;
  category: WorkLibraryCategory;
  stats: {
    timeline: string;
    scope: string;
    impact: string;
  };
};

export const workLibraryTabs: { id: 'all' | WorkLibraryCategory; name: string }[] =
  [
    { id: 'all', name: 'All' },
    { id: 'website', name: 'Website' },
    { id: 'mobileApp', name: 'Mobile App' },
    { id: 'desktopApp', name: 'Desktop Software' },
    { id: 'customBusiness', name: 'Custom Business Software' },
    { id: 'brandingMarketing', name: 'Branding , UI/UX & Marketing ' },
    { id: 'startupKit', name: 'Startup Kit' },
  ];

export const workLibraryProjects: WorkLibraryProject[] = [
  {
    id: 'saathsource-b2b',
    title: 'SaathSource B2B Pharma Marketplace',
    stack: 'MERN Stack • JWT • REST API',
    summary:
      'A B2B pharmaceutical marketplace connecting verified buyers and sellers of raw pharmaceutical products with secure access and direct communication.',
    deliverables: [
      'Buyer & seller verification system',
      'Secure JWT-based authentication',
      'Product listing & inquiry workflows',
    ],
    heroImage:
      'https://drive.google.com/uc?export=view&id=1WF89xQrBzKDDMUkfjKUxiQwx_ihKFUzt',
    category: 'customBusiness',
    stats: {
      timeline: '3 weeks',
      scope: 'B2B marketplace',
      impact: 'Streamlined pharma sourcing',
    },
  },
  {
    id: 'ai-viva-portal',
    title: 'AI Viva Examination Portal',
    stack: 'React • Node.js • AI/ML • MongoDB',
    summary:
      'AI-powered viva practice platform that generates questions automatically, evaluates responses, and provides instant feedback with performance tracking.',
    deliverables: [
      'AI-based question generation',
      'Automated evaluation & scoring',
      'Student performance analytics',
    ],
    heroImage:
      'https://drive.google.com/uc?export=view&id=1z_WK191n9lHWKXeNhKvEgugeApbuNJef',
    category: 'customBusiness',
    stats: {
      timeline: '4 weeks',
      scope: 'Student practice portal',
      impact: 'Improved viva readiness',
    },
  },
  {
    id: 'wvomb-advisors',
    title: 'WVOMB Advisors Corporate Website',
    stack: 'React • Tailwind • SEO Optimization',
    summary:
      'A corporate consulting website designed to help businesses access financial, operational, and compliance services with strong branding and lead-focused UX.',
    deliverables: [
      'Service-based information architecture',
      'Lead generation CTAs & contact flows',
      'Clean corporate UI with brand focus',
    ],
    heroImage:
      'https://drive.google.com/uc?export=view&id=186pC_auDXdFS0_xbO2qsByLivC1z9ZDn',
    category: 'website',
    stats: {
      timeline: '4 weeks',
      scope: 'Business consulting platform',
      impact: 'Higher client inquiries',
    },
  },
  {
    id: 'desktop-ledger',
    title: 'LedgerPro Desktop Suite',
    stack: 'Electron • SQLite • Rust workers',
    summary:
      'Cross-platform ledger and inventory tool for 45 franchise stores with role-based access and synced auditing.',
    deliverables: [
      'Offline-first data layer',
      'Thermal print integrations',
      'Auto-update pipeline',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    category: 'customBusiness',
    stats: {
      timeline: '12 weeks',
      scope: 'Windows + macOS',
      impact: '4h/day saved',
    },
  },
  {
    id: 'saas-horizon',
    title: 'Horizon Analytics Platform',
    stack: 'Next.js • Supabase • D3',
    summary:
      'Self-serve analytics SaaS with workspace provisioning, billing, and collaboration primitives.',
    deliverables: [
      'Tenant-aware backend',
      'Usage-based billing',
      'Embeddable insight widgets',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1600&q=80',
    category: 'desktopApp',
    stats: {
      timeline: '14 weeks',
      scope: '3 personas',
      impact: 'MRR launch-ready',
    },
  },
  {
    id: 'automation-hatch',
    title: 'Hatch Fulfillment Automation',
    stack: 'NestJS • Temporal • RabbitMQ',
    summary:
      'Workflow orchestration for D2C warehouses covering pick-pack, QC, invoicing, and logistics reconciliation.',
    deliverables: [
      'Event-driven microservices',
      'Admin alert cockpit',
      'Vendor integration kit',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80',
    category: 'desktopApp',
    stats: {
      timeline: '16 weeks',
      scope: '7 integrations',
      impact: '-58% manual touches',
    },
  },
  {
    id: 'brand-flux',
    title: 'Flux Mobility Brand System',
    stack: 'Figma • After Effects',
    summary:
      'Comprehensive identity kit with motion language, product UI kit, and GTM collateral for an EV startup.',
    deliverables: [
      'Logo + typography system',
      'UI token library',
      'Campaign toolkit',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80',
    category: 'brandingMarketing',
    stats: {
      timeline: '5 weeks',
      scope: '40 deliverables',
      impact: 'Seed deck ready',
    },
  },
  {
    id: 'marketing-pulse',
    title: 'Pulse Growth Ops Studio',
    stack: 'Next.js • HubSpot • Airtable',
    summary:
      'Always-on campaign microsite builder with templatized stories, CRM syncing, and experimentation dashboard.',
    deliverables: [
      'Story-driven CMS',
      'HubSpot + GA4 bridge',
      'Component library',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80',
    category: 'brandingMarketing',
    stats: {
      timeline: '7 weeks',
      scope: '20 component types',
      impact: 'Ship weekly launches',
    },
  },
  {
    id: 'whitelabel-arc',
    title: 'Arc Commerce White-Label Kit',
    stack: 'Next.js • Medusa • AWS',
    summary:
      'Turnkey commerce starter for agencies — multi-tenant, brand theming, and deployment runbooks.',
    deliverables: [
      'Themeing system',
      'Subscription-ready checkout',
      'Maintenance playbook',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=1600&q=80',
    category: 'startupKit',
    stats: {
      timeline: '9 weeks',
      scope: '6 reseller kits',
      impact: 'Launch in 72 hrs',
    },
  },
];