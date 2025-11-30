'use client'
import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll position and direction
 * @returns {object} - Scroll information
 */
export const useScroll = () => {
  const [scrollData, setScrollData] = useState({
    scrollY: 0,
    scrollX: 0,
    scrollDirection: null,
    isScrolled: false
  });

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollData = () => {
      const scrollY = window.pageYOffset;
      const scrollX = window.pageXOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';

      setScrollData({
        scrollY,
        scrollX,
        scrollDirection: direction,
        isScrolled: scrollY > 0
      });

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollData);
    
    // Initial call
    updateScrollData();

    return () => window.removeEventListener('scroll', updateScrollData);
  }, []);

  return scrollData;
};

/**
 * Hook to detect if user has scrolled past a specific threshold
 * @param {number} threshold - Scroll threshold in pixels
 * @returns {boolean}
 */
export const useScrollPast = (threshold = 100) => {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPast(window.pageYOffset > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isPast;
};

export default useScroll;

