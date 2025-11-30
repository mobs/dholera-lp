'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube
} from 'react-icons/fa';
import { NAV_ITEMS, QUICK_LINKS } from '@/constants/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaYoutube
  };

  const SOCIAL_LINKS = [
    { name: 'Facebook', href: 'https://facebook.com/4sfs', icon: 'FaFacebook' },
    { name: 'Twitter', href: 'https://twitter.com/4sfs', icon: 'FaTwitter' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/4sfs', icon: 'FaLinkedin' },
    { name: 'Instagram', href: 'https://instagram.com/4sfs', icon: 'FaInstagram' },
    { name: 'YouTube', href: 'https://youtube.com/4sfs', icon: 'FaYoutube' }
  ];

  // Handle smooth scroll to section
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 96; // Navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-secondary via-secondary to-darkgray text-white">
      {/* Minimal Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Logo & Social */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-40 h-14">
                <Image
                  src="/logo-white.png"
                  alt="4SFS Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = socialIcons[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-tertiary flex items-center justify-center transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="text-lg" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-tertiary">Quick Navigation</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="text-sm text-gray-300 hover:text-tertiary transition-colors duration-200 cursor-pointer inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-tertiary">Legal</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-tertiary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300 text-center md:text-left">
              © {currentYear} 4SFS - For Sure Funds. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {QUICK_LINKS.map((link, index) => (
                <React.Fragment key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                  {index < QUICK_LINKS.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
