import { 
  FaHome, 
  FaBuilding, 
  FaHandHoldingUsd, 
  FaShieldAlt, 
  FaLightbulb, 
  FaBlog, 
  FaPhoneAlt,
  FaStore,
  FaHospital,
  FaHeartbeat,
  FaUserShield,
  FaCar,
  FaUmbrella,
  FaPlane
} from 'react-icons/fa';

export const NAV_ITEMS = [
  {
    label: 'Home',
    href: '#hero',
    icon: FaHome
  },
  {
    label: 'Why Dholera',
    href: '#why-dholera',
    icon: FaLightbulb
  },
  {
    label: 'Future Ready',
    href: '#future-ready',
    icon: FaBuilding
  },
  {
    label: 'Latest Updates',
    href: '#latest-updates',
    icon: FaBlog
  },
  {
    label: 'Investment Options',
    href: '#investment-options',
    icon: FaHandHoldingUsd
  },
  {
    label: 'Why Choose Us',
    href: '#why-choose-us',
    icon: FaShieldAlt
  },
  {
    label: 'FAQs',
    href: '#faqs',
    icon: FaStore
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: FaPhoneAlt
  }
]

// Quick Links for Footer (Legal pages only)
export const QUICK_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' }
];

// Social Media Links
export const SOCIAL_LINKS = [
  { 
    name: 'Facebook', 
    href: 'https://facebook.com/4sfs', 
    icon: 'FaFacebook' 
  },
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/4sfs', 
    icon: 'FaTwitter' 
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/company/4sfs', 
    icon: 'FaLinkedin' 
  },
  { 
    name: 'Instagram', 
    href: 'https://instagram.com/4sfs', 
    icon: 'FaInstagram' 
  },
  { 
    name: 'YouTube', 
    href: 'https://youtube.com/4sfs', 
    icon: 'FaYoutube' 
  }
];

// Contact Info
export const CONTACT_INFO = {
  phone: '+91 1234567890',
  email: 'info@4sfs.com',
  address: '123 Finance Street, Business District, Mumbai - 400001, India',
  workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  support: 'support@4sfs.com'
};
