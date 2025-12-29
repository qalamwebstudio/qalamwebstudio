'use client';

export type WorkLibraryCategory =
  | 'website'
  | 'mobileApp'
  | 'desktopBusiness'
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
    { id: 'desktopBusiness', name: 'Desktop & Business Software' },
    { id: 'brandingMarketing', name: 'Branding , UI/UX & Marketing ' },
    { id: 'startupKit', name: 'Startup Kit' },
  ];

export const workLibraryProjects: WorkLibraryProject[] = [
  
  {
    id: 'photography-immersive',
    title: 'Immersive Photography Portfolio',
    stack: 'Next.js • Three.js • GSAP',
    summary:
      'A high-end immersive photography website combining 3D interactions and smooth animations to deliver a cinematic visual experience for showcasing creative work.',
    deliverables: [
      'Three.js powered 3D gallery experience',
      'Smooth page transitions & scroll animations',
      'Optimized media handling for performance',
    ],
    heroImage:
      'https://drive.google.com/uc?export=view&id=1SOhxrDyQZth6UUSPd32W_PpUycZ6cCQi',
    category: 'website',
    stats: {
      timeline: '5 weeks',
      scope: 'Interactive portfolio website',
      impact: 'Stronger brand perception & engagement',
    },
  },

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
    category: 'website',
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
    category: 'website',
    stats: {
      timeline: '4 weeks',
      scope: 'Student practice portal',
      impact: 'Improved viva readiness',
    },
  },
  {
    id: 'redskyplacement-security',
    title: 'RedSky Placement & Security Agency Website',
    stack: 'React.js • Tailwind CSS • SEO Optimization',
    summary:
      'A professional security agency website built to establish trust, showcase manpower services, and generate direct client inquiries through a clean and authoritative web presence.',
    deliverables: [
      'Service showcase for security & placement offerings',
      'Lead inquiry & contact workflows',
      'SEO-optimized pages with fast load performance',
    ],
    heroImage:
      'https://drive.google.com/uc?export=view&id=1MzYqD4iuRSlcsMwl-keUfbw63Fe13a2t',
    category: 'website',
    stats: {
      timeline: '2 weeks',
      scope: 'Corporate service website',
      impact: 'Increased client credibility & inquiries',
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
    category: 'desktopBusiness',
    stats: {
      timeline: '12 weeks',
      scope: 'Windows + macOS',
      impact: '4h/day saved',
    },
  },
  {
    id: 'retailai-erp',
    title: 'RetailAi – Mall-Scale ERP & Operations Suite',
    stack: 'Electron.js • NestJS • PostgreSQL • RBAC',
    summary:
      'RetailAi is a full-scale desktop ERP system built for large shopping malls and multi-store retail chains, enabling centralized control over sales, inventory, billing, staff operations, and real-time reporting.',
    deliverables: [
      'Multi-store & multi-branch retail management',
      'Role-based access control for admins, managers & staff',
      'Sales, inventory, billing & GST-ready reporting',
      'Centralized analytics dashboard for mall operations',
    ],
    heroImage:
      'https://drive.google.com/uc?export=view&id=13SlNBT3iowHeZWuExbmTxM76wp5z3kSs',
    category: 'desktopBusiness',
    stats: {
      timeline: '16 weeks',
      scope: 'Enterprise retail ERP for malls',
      impact: 'Unified control across large retail operations',
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
    category: 'desktopBusiness',
    stats: {
      timeline: '16 weeks',
      scope: '7 integrations',
      impact: '-58% manual touches',
    },
  },
  {
    id: 'gunifrinds-campus',
    title: 'GuniFrinds – Campus Random Video Connect App',
    stack: 'React Native • WebRTC • Firebase • Moderation APIs',
    summary:
      'GuniFrinds is a campus-exclusive mobile app built for Ganpat University students, enabling safe and random video connections to help students socialize, interact, and build new friendships within their university network.',
    deliverables: [
      'Random one-to-one video call matching',
      'University email / ID based access control',
      'Realtime video calling with WebRTC',
      'User reporting & basic moderation system',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80',
    category: 'mobileApp',
    stats: {
      timeline: '6 weeks',
      scope: 'University-only social app',
      impact: 'Improved peer interaction & engagement',
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