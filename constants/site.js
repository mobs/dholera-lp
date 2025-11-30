// Site-wide constants and configuration

export const SITE_CONFIG = {
  name: '4SFS',
  fullName: 'For Sure Funds',
  description: 'Your trusted partner for property investment, home loans, insurance, and financial solutions.',
  url: 'https://4sfs.com',
  ogImage: '/og-image.jpg',
  keywords: [
    'real estate',
    'property investment',
    'home loans',
    'insurance',
    'finance',
    'investment',
    'buy property',
    'sell property',
    'health insurance',
    'term insurance',
    'property valuation',
    'emi calculator'
  ]
};

export const COMPANY_INFO = {
  legalName: '4SFS - For Sure Funds Pvt. Ltd.',
  founded: '2020',
  gst: 'GST123456789',
  cin: 'U12345MH2020PTC123456',
  address: {
    street: '123 Finance Street',
    area: 'Business District',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    country: 'India'
  }
};

export const BUSINESS_HOURS = {
  weekdays: {
    open: '09:00 AM',
    close: '07:00 PM'
  },
  saturday: {
    open: '09:00 AM',
    close: '05:00 PM'
  },
  sunday: {
    closed: true
  }
};

// Feature highlights
export const FEATURES = [
  {
    id: 'trusted',
    title: 'Trusted by Thousands',
    description: 'Over 10,000+ satisfied customers across India',
    icon: 'FaUsers'
  },
  {
    id: 'verified',
    title: 'Verified Properties',
    description: '100% verified listings with legal clearance',
    icon: 'FaCheckCircle'
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your queries',
    icon: 'FaHeadset'
  },
  {
    id: 'secure',
    title: 'Secure Transactions',
    description: 'End-to-end encrypted and secure payment processing',
    icon: 'FaLock'
  }
];

// Statistics
export const STATS = [
  {
    label: 'Properties Listed',
    value: '50,000+',
    icon: 'FaBuilding'
  },
  {
    label: 'Happy Customers',
    value: '10,000+',
    icon: 'FaSmile'
  },
  {
    label: 'Cities Covered',
    value: '100+',
    icon: 'FaMapMarked'
  },
  {
    label: 'Loan Amount Disbursed',
    value: '₹500Cr+',
    icon: 'FaChartLine'
  }
];

// Testimonial data structure
export const TESTIMONIALS_SAMPLE = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Property Buyer',
    image: '/testimonials/user1.jpg',
    rating: 5,
    comment: 'Excellent service! Found my dream home within a month. The team was very professional and helpful throughout the process.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Home Loan Customer',
    image: '/testimonials/user2.jpg',
    rating: 5,
    comment: 'Got the best home loan rates with hassle-free documentation. Highly recommend 4SFS for all financial needs.'
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Insurance Buyer',
    image: '/testimonials/user3.jpg',
    rating: 5,
    comment: 'Their insurance advisory service helped me choose the right policy for my family. Great experience!'
  }
];

export default SITE_CONFIG;

