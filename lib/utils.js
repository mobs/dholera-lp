/**
 * Utility functions for common operations
 */

/**
 * Format price in Indian currency format
 * @param {number} price - Price to format
 * @param {boolean} showDecimals - Whether to show decimal places
 * @returns {string} - Formatted price string
 */
export const formatPrice = (price, showDecimals = false) => {
  if (!price) return '₹0';
  
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0
  });

  return formatter.format(price);
};

/**
 * Format large numbers in compact form (e.g., 1.5L, 2.5Cr)
 * @param {number} num - Number to format
 * @returns {string} - Formatted number string
 */
export const formatCompactNumber = (num) => {
  if (!num) return '0';
  
  const absNum = Math.abs(num);
  
  if (absNum >= 10000000) { // 1 Crore
    return `₹${(num / 10000000).toFixed(2)}Cr`;
  } else if (absNum >= 100000) { // 1 Lakh
    return `₹${(num / 100000).toFixed(2)}L`;
  } else if (absNum >= 1000) { // 1 Thousand
    return `₹${(num / 1000).toFixed(2)}K`;
  }
  
  return `₹${num.toLocaleString('en-IN')}`;
};

/**
 * Calculate EMI (Equated Monthly Installment)
 * @param {number} principal - Loan amount
 * @param {number} rateAnnual - Annual interest rate (percentage)
 * @param {number} tenureMonths - Loan tenure in months
 * @returns {object} - EMI details
 */
export const calculateEMI = (principal, rateAnnual, tenureMonths) => {
  const rateMonthly = rateAnnual / 12 / 100;
  
  const emi = 
    (principal * rateMonthly * Math.pow(1 + rateMonthly, tenureMonths)) /
    (Math.pow(1 + rateMonthly, tenureMonths) - 1);
  
  const totalAmount = emi * tenureMonths;
  const totalInterest = totalAmount - principal;

  return {
    emi: Math.round(emi),
    totalAmount: Math.round(totalAmount),
    totalInterest: Math.round(totalInterest),
    principal: Math.round(principal)
  };
};

/**
 * Format date to readable format
 * @param {Date|string} date - Date to format
 * @param {string} format - Format type ('short', 'long', 'relative')
 * @returns {string} - Formatted date string
 */
export const formatDate = (date, format = 'short') => {
  const dateObj = new Date(date);
  
  if (format === 'relative') {
    const now = new Date();
    const diffTime = Math.abs(now - dateObj);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  }
  
  const options = format === 'long' 
    ? { year: 'numeric', month: 'long', day: 'numeric' }
    : { year: 'numeric', month: 'short', day: 'numeric' };
  
  return dateObj.toLocaleDateString('en-IN', options);
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} - Truncated text
 */
export const truncateText = (text, length = 100) => {
  if (!text || text.length <= length) return text;
  return text.substring(0, length) + '...';
};

/**
 * Generate slug from text
 * @param {string} text - Text to convert to slug
 * @returns {string} - URL-friendly slug
 */
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Indian format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - Whether phone is valid
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Deep clone an object
 * @param {object} obj - Object to clone
 * @returns {object} - Cloned object
 */
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Merge class names (useful with Tailwind)
 * @param  {...string} classes - Class names to merge
 * @returns {string} - Merged class string
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Check if value is empty (null, undefined, empty string, empty array, empty object)
 * @param {any} value - Value to check
 * @returns {boolean} - Whether value is empty
 */
export const isEmpty = (value) => {
  if (value == null) return true;
  if (typeof value === 'string') return value.trim() === '';
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
};

/**
 * Get property area unit conversion
 * @param {number} value - Area value
 * @param {string} fromUnit - Source unit (sqft, sqm, sqyd)
 * @param {string} toUnit - Target unit
 * @returns {number} - Converted value
 */
export const convertArea = (value, fromUnit, toUnit) => {
  const conversions = {
    sqft: 1,
    sqm: 10.764,
    sqyd: 9,
    acre: 43560
  };

  const sqft = value * (fromUnit === 'sqft' ? 1 : conversions[fromUnit]);
  return sqft / (toUnit === 'sqft' ? 1 : conversions[toUnit]);
};

export default {
  formatPrice,
  formatCompactNumber,
  calculateEMI,
  formatDate,
  truncateText,
  generateSlug,
  isValidEmail,
  isValidPhone,
  deepClone,
  cn,
  debounce,
  throttle,
  isEmpty,
  convertArea
};

