'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { NAV_ITEMS } from '@/constants/navigation';
import Button from '@/components/ui/Button';

const Navbar = ({ setOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      setIsScrolled(currentScrollY > 20);
      
      // Handle navbar visibility
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
        setActiveDropdown(null); // Close dropdowns when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleMouseEnter = (label) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (label) => {
    setActiveSubDropdown(activeSubDropdown === label ? null : label);
  };

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
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100' 
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Luxury Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="relative w-40 h-14">
                <Image
                  src="/logo-black.png"
                  alt="4SFS Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Elegant underline on hover */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary origin-center"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Luxury Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.children ? (
                  <>
                    <button
                      className={`group flex items-center space-x-2 px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 rounded-xl relative overflow-hidden ${
                        activeDropdown === item.label
                          ? 'text-primary'
                          : 'text-darkgray hover:text-primary'
                      }`}
                    >
                      {/* Elegant hover background */}
                      <span className={`absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 transform origin-center transition-transform duration-300 ${
                        activeDropdown === item.label ? 'scale-100' : 'scale-0'
                      } group-hover:scale-100`} />
                      
                      <span className="relative z-10">{item.label}</span>
                      <FaChevronDown 
                        className={`relative z-10 text-xs transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                      
                      {/* Bottom accent line */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeDropdown === item.label ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </button>

                    {/* Luxury Mega Menu Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                          className="absolute left-0 mt-4 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
                        >
                          {/* Elegant top accent */}
                          <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
                          <div className="py-3">
                            {item.children.map((child, idx) => (
                              <div key={child.label}>
                                {child.children ? (
                                  <div className="relative group/sub">
                                    <div className="flex items-center justify-between px-6 py-4 text-sm text-darkgray hover:bg-gradient-to-r hover:from-secondary/5 hover:to-primary/5 cursor-pointer transition-all duration-300 group">
                                      <span className="font-semibold group-hover:text-primary transition-colors">{child.label}</span>
                                      <FaChevronRight className="text-xs text-secondary" />
                                    </div>
                                    
                                    {/* Luxury Sub Dropdown */}
                                    <div className="absolute left-full top-0 ml-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 overflow-hidden">
                                      <div className="h-1 bg-gradient-to-r from-secondary via-primary to-secondary" />
                                      <div className="py-3">
                                        {child.children.map((subChild) => (
                                          <Link
                                            key={subChild.label}
                                            href={subChild.href}
                                            className="block px-6 py-3 text-sm text-darkgray hover:bg-gradient-to-r hover:from-secondary/5 hover:to-primary/5 hover:text-primary transition-all duration-300 font-medium"
                                          >
                                            <span className="flex items-center">
                                              <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                              {subChild.label}
                                            </span>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ) : (
                                  <Link
                                    href={child.href}
                                    className="group block px-6 py-4 text-sm text-darkgray hover:bg-gradient-to-r hover:from-secondary/5 hover:to-primary/5 hover:text-primary transition-all duration-300 font-semibold"
                                  >
                                    <span className="flex items-center">
                                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                      {child.label}
                                    </span>
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="group relative block px-5 py-3 text-sm font-semibold tracking-wide text-darkgray hover:text-primary transition-colors duration-300 rounded-xl overflow-hidden cursor-pointer"
                  >
                    {/* Elegant hover background */}
                    <span className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Bottom accent line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Luxury CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="primary" 
                onClick={() => setOpenModal && setOpenModal(true)}
                className="rounded-full px-8 py-3 text-sm font-semibold shadow-lg hover:shadow-xl"
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Luxury Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
            className="lg:hidden p-3 rounded-xl text-darkgray hover:bg-gradient-to-br hover:from-secondary/10 hover:to-primary/10 transition-all duration-300 border border-gray-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Luxury Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 overflow-hidden"
          >
            <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
            <div className="max-w-7xl mx-auto px-4 py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-gray-100 last:border-0">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full flex items-center justify-between py-3 text-left text-darkgray font-medium"
                      >
                        <span className="flex items-center space-x-2">
                          {item.icon && <item.icon className="text-primary" />}
                          <span>{item.label}</span>
                        </span>
                        <FaChevronDown
                          className={`text-xs transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <div key={child.label}>
                                {child.children ? (
                                  <div>
                                    <button
                                      onClick={() => toggleSubDropdown(child.label)}
                                      className="w-full flex items-center justify-between py-2.5 text-left text-sm text-darkgray"
                                    >
                                      <span>{child.label}</span>
                                      <FaChevronDown
                                        className={`text-xs transition-transform duration-200 ${
                                          activeSubDropdown === child.label ? 'rotate-180' : ''
                                        }`}
                                      />
                                    </button>

                                    <AnimatePresence>
                                      {activeSubDropdown === child.label && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="pl-4"
                                        >
                                          {child.children.map((subChild) => (
                                            <Link
                                              key={subChild.label}
                                              href={subChild.href}
                                              className="block py-2 text-sm text-muted hover:text-primary transition-colors"
                                              onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                              {subChild.label}
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ) : (
                                  <Link
                                    href={child.href}
                                    className="block py-2.5 text-sm text-darkgray hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleScrollToSection(e, item.href)}
                      className="flex items-center space-x-2 py-3 text-darkgray font-medium hover:text-primary transition-colors cursor-pointer"
                    >
                      {item.icon && <item.icon className="text-primary" />}
                      <span>{item.label}</span>
                    </a>
                  )}
                </div>
              ))}

              {/* Luxury Mobile CTA */}
              <div className="pt-6 pb-4">
                <Button 
                  variant="primary" 
                  className="w-full rounded-full justify-center py-4 font-semibold shadow-lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setOpenModal && setOpenModal(true);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

