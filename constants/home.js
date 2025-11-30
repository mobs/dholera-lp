/**
 * Homepage Constants
 * All data for homepage sections
 */

// About Section Data
export const ABOUT_SECTION = {
  badge: 'About 4SFS',
  title: {
    main: 'Investment Advisors,',
    highlight: 'Not Just Agents'
  },
  content: [
    'At 4SFS, we are more than just real estate agents—we are investment advisors who understand the financial side of real estate. With a team of experienced investment consultants who have practiced as Chartered Accountants (CAs) and have over 10 years of finance expertise, we bring a strategic approach to property investment and home loan solutions.',
    'Our founder, a qualified lawyer, transitioned from legal practice to focus on helping investors navigate the real estate market with confidence and financial security. This unique blend of legal, financial, and real estate expertise makes us different from traditional real estate agents.'
  ],
  stats: [
    { value: '10+', label: 'Years Experience' },
    { value: '1000+', label: 'Happy Clients' }
  ],
  highlights: [
    {
      icon: 'FaCalculator',
      title: '10+ Years',
      subtitle: 'Finance Expertise'
    },
    {
      icon: 'FaBalanceScale',
      title: 'CA & Legal',
      subtitle: 'Background Team'
    },
    {
      icon: 'FaShieldAlt',
      title: 'Strategic',
      subtitle: 'Investment Approach'
    },
    {
      icon: 'FaHandshake',
      title: 'Trusted',
      subtitle: 'Investment Advisors'
    }
  ]
};

// Featured Properties Data
export const FEATURED_PROPERTIES = {
  badge: 'Featured Projects',
  title: 'Top Investment Opportunities',
  subtitle: 'Explore the most promising residential and commercial projects curated by our experts.',
  ctaText: 'View All Projects',
  ctaLink: '/buy-properties',
  properties: [
    {
      id: 1,
      title: 'Luxury Apartments in South Mumbai',
      type: 'Residential',
      location: 'South Mumbai, Maharashtra',
      price: '₹2.5 Cr - 4.5 Cr',
      area: '1200 - 2000 sq.ft',
      image: '/image.webp',
      featured: true,
      link: '/properties/1'
    },
    {
      id: 2,
      title: 'Premium Office Spaces',
      type: 'Commercial',
      location: 'BKC, Mumbai',
      price: '₹3.2 Cr - 5.8 Cr',
      area: '1500 - 2500 sq.ft',
      image: '/image.webp',
      featured: false,
      link: '/properties/2'
    },
    {
      id: 3,
      title: 'Modern Villas with Garden',
      type: 'Residential',
      location: 'Pune, Maharashtra',
      price: '₹1.8 Cr - 3.2 Cr',
      area: '2500 - 3500 sq.ft',
      image: '/image.webp',
      featured: true,
      link: '/properties/3'
    },
    {
      id: 4,
      title: 'Retail Shop in Prime Location',
      type: 'Commercial',
      location: 'Worli, Mumbai',
      price: '₹4.5 Cr - 7.2 Cr',
      area: '800 - 1200 sq.ft',
      image: '/image.webp',
      featured: false,
      link: '/properties/4'
    },
    {
      id: 5,
      title: 'Penthouse with Skyline View',
      type: 'Premium',
      location: 'Lower Parel, Mumbai',
      price: '₹8.5 Cr - 12 Cr',
      area: '3000 - 4000 sq.ft',
      image: '/image.webp',
      featured: true,
      link: '/properties/5'
    },
    {
      id: 6,
      title: 'Smart Business Hub',
      type: 'Commercial',
      location: 'Navi Mumbai, Maharashtra',
      price: '₹2.2 Cr - 3.8 Cr',
      area: '1000 - 1800 sq.ft',
      image: '/image.webp',
      featured: false,
      link: '/properties/6'
    }
  ]
};

// Services Section Data
export const SERVICES_SECTION = {
  badge: 'Our Services',
  title: {
    main: 'Everything You Need',
    highlight: 'in One Place'
  },
  subtitle: 'Comprehensive solutions for all your real estate and financial needs',
  contactText: 'Need help choosing the right service?',
  contactCta: 'Talk to Our Experts',
  contactLink: '/contact',
  services: [
    {
      icon: 'FaHome',
      title: 'Buy Property',
      description: 'Explore new launches and resale options with verified listings and expert guidance.',
      features: ['Verified Properties', 'Expert Guidance', 'Virtual Tours'],
      link: '/buy-properties',
      color: 'primary',
      gradient: 'from-primary/5 to-primary/10'
    },
    {
      icon: 'FaStore',
      title: 'Sell Property',
      description: 'Get expert valuation and marketing support to sell your property at the best price.',
      features: ['Free Valuation', 'Marketing Support', 'Legal Assistance'],
      link: '/sell-properties',
      color: 'secondary',
      gradient: 'from-secondary/5 to-secondary/10'
    },
    {
      icon: 'FaUniversity',
      title: 'Home Loans',
      description: 'Compare and get best loan offers with lowest interest rates and quick approval.',
      features: ['Best Rates', 'Quick Approval', 'EMI Calculator'],
      link: '/home-loans',
      color: 'accent',
      gradient: 'from-accent/5 to-accent/10'
    },
    {
      icon: 'FaChartLine',
      title: 'Working Capital Loans',
      description: 'Finance for businesses and property owners with flexible repayment options.',
      features: ['Flexible Terms', 'Quick Disbursal', 'Minimal Documentation'],
      link: '/working-capital-loans',
      color: 'success',
      gradient: 'from-success/5 to-success/10'
    }
  ]
};

// Why Choose Us Section Data
export const WHY_CHOOSE_US = {
  badge: 'Why Choose Us',
  title: {
    main: 'Why Investors',
    highlight: 'Trust 4SFS'
  },
  subtitle: 'We combine financial expertise with real estate knowledge to deliver exceptional investment outcomes',
  stats: [
    { value: '10+', label: 'Years Experience' },
    { value: '50K+', label: 'Properties Listed' },
    { value: '1000+', label: 'Happy Investors' },
    { value: '₹500Cr+', label: 'Investments Facilitated' }
  ],
  highlights: [
    {
      icon: 'FaAward',
      title: '10+ Years of Financial Expertise',
      description: 'Backed by experienced CAs and finance professionals with proven track record.',
      color: 'primary'
    },
    {
      icon: 'FaUserTie',
      title: 'CA & Legal Background Team',
      description: 'Unique combination of chartered accountants and legal experts guiding your investments.',
      color: 'secondary'
    },
    {
      icon: 'FaCheckCircle',
      title: 'Verified Projects Only',
      description: 'Every property undergoes rigorous verification for legal clearance and authenticity.',
      color: 'success'
    },
    {
      icon: 'FaChartLine',
      title: 'Personalized Investment Planning',
      description: 'Customized strategies based on your financial goals and risk appetite.',
      color: 'accent'
    },
    {
      icon: 'FaHandshake',
      title: 'Zero Brokerage for Select Projects',
      description: 'Save on brokerage fees with our exclusive zero-commission property listings.',
      color: 'secondary'
    },
    {
      icon: 'FaShieldAlt',
      title: 'End-to-End Support',
      description: 'From property search to documentation, we handle everything for a smooth experience.',
      color: 'primary'
    }
  ],
  cta: {
    title: 'Ready to Make Smart Investments?',
    subtitle: 'Get personalized investment advice from our CA and legal experts. Book your free consultation today.',
    primaryButton: {
      text: 'Book Free Consultation',
      link: '/contact'
    },
    secondaryButton: {
      text: 'View Our Projects',
      link: '/buy-properties'
    },
    trustIndicators: [
      '100% Verified Properties',
      'Expert Financial Guidance',
      'Legal Support Included'
    ]
  }
};

// Hero Section Data
export const HERO_SECTION = {
  title: {
    main: 'Your Gateway to Smart',
    highlight: 'Financial Decisions'
  },
  subtitle: 'Discover perfect properties, secure best home loans, and protect what matters with comprehensive insurance solutions - all in one place.',
  searchPlaceholder: 'Search properties, locations, or services...',
  searchButton: 'Search',
  features: [
    {
      icon: 'FaHome',
      title: 'Buy & Sell Properties',
      description: 'Find your dream property or sell at the best price'
    },
    {
      icon: 'FaHandHoldingUsd',
      title: 'Home Loans',
      description: 'Get instant approval with lowest interest rates'
    },
    {
      icon: 'FaShieldAlt',
      title: 'Insurance Solutions',
      description: 'Comprehensive coverage for you and your family'
    }
  ],
  cta: {
    primary: {
      text: 'Explore Properties',
      link: '/buy-properties'
    },
    secondary: {
      text: 'Calculate EMI',
      link: '/home-loans/emi-calculator'
    }
  }
};

export default {
  ABOUT_SECTION,
  FEATURED_PROPERTIES,
  SERVICES_SECTION,
  WHY_CHOOSE_US,
  HERO_SECTION
};

