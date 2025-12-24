'use client';

export type WorkLibraryCategory =
  | 'webExperience'
  | 'ecommerce'
  | 'mobileProduct'
  | 'desktopSuite'
  | 'saasPlatform'
  | 'processAutomation'
  | 'brandingKit'
  | 'marketingOps'
  | 'whiteLabel';

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
    { id: 'webExperience', name: 'Web Experiences' },
    { id: 'ecommerce', name: 'Commerce' },
    { id: 'mobileProduct', name: 'Mobile Products' },
    { id: 'desktopSuite', name: 'Desktop Suites' },
    { id: 'saasPlatform', name: 'SaaS Platforms' },
    { id: 'processAutomation', name: 'Automation' },
    { id: 'brandingKit', name: 'Branding' },
    { id: 'marketingOps', name: 'Marketing Ops' },
    { id: 'whiteLabel', name: 'White Label' },
  ];

export const workLibraryProjects: WorkLibraryProject[] = [
  {
    id: 'web-nova',
    title: 'Nova Wealth Marketing Site',
    stack: 'Next.js • Tailwind • Contentful',
    summary:
      'Multi-language marketing experience with modular story blocks, gated resources, and analytics instrumentation.',
    deliverables: [
      'Headless CMS architecture',
      'Performance budget + CWV tuning',
      'Marketing automation hooks',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    category: 'webExperience',
    stats: {
      timeline: '6 weeks',
      scope: '12 templates',
      impact: '+43% qualified demos',
    },
  },
  {
    id: 'commerce-vector',
    title: 'Vector Gear Commerce Rebuild',
    stack: 'Shopify Hydrogen • Remix',
    summary:
      'Headless commerce storefront with real-time inventory sync and personalized bundles for returning customers.',
    deliverables: [
      'Custom PDP builder',
      'Subscription-ready checkout',
      'ERP fulfillment bridge',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1600&q=80',
    category: 'ecommerce',
    stats: {
      timeline: '8 weeks',
      scope: '40+ screens',
      impact: '2.1x AOV',
    },
  },
  {
    id: 'mobile-courier',
    title: 'CourierMate Driver App',
    stack: 'React Native • Firebase • Mapbox',
    summary:
      'Offline-friendly courier companion that manages assignments, live routing, proof-of-delivery, and payouts.',
    deliverables: [
      'Background sync engine',
      'Push & SMS alert system',
      'Ops dashboard API',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    category: 'mobileProduct',
    stats: {
      timeline: '10 weeks',
      scope: 'Android + iOS',
      impact: '-32% failed drops',
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
    category: 'desktopSuite',
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
    category: 'saasPlatform',
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
    category: 'processAutomation',
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
    category: 'brandingKit',
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
    category: 'marketingOps',
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
    category: 'whiteLabel',
    stats: {
      timeline: '9 weeks',
      scope: '6 reseller kits',
      impact: 'Launch in 72 hrs',
    },
  },
];
