/**
 * Form validation functions
 */

/**
 * Validate required field
 */
export const required = (value) => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return 'This field is required';
  }
  return null;
};

/**
 * Validate email
 */
export const email = (value) => {
  if (!value) return null;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return 'Please enter a valid email address';
  }
  return null;
};

/**
 * Validate phone number (Indian format)
 */
export const phone = (value) => {
  if (!value) return null;
  
  const cleanPhone = value.replace(/\s/g, '');
  const phoneRegex = /^[6-9]\d{9}$/;
  
  if (!phoneRegex.test(cleanPhone)) {
    return 'Please enter a valid 10-digit phone number';
  }
  return null;
};

/**
 * Validate minimum length
 */
export const minLength = (min) => (value) => {
  if (!value) return null;
  
  if (value.length < min) {
    return `Must be at least ${min} characters`;
  }
  return null;
};

/**
 * Validate maximum length
 */
export const maxLength = (max) => (value) => {
  if (!value) return null;
  
  if (value.length > max) {
    return `Must be no more than ${max} characters`;
  }
  return null;
};

/**
 * Validate minimum value
 */
export const minValue = (min) => (value) => {
  if (value === null || value === undefined || value === '') return null;
  
  const numValue = Number(value);
  if (numValue < min) {
    return `Must be at least ${min}`;
  }
  return null;
};

/**
 * Validate maximum value
 */
export const maxValue = (max) => (value) => {
  if (value === null || value === undefined || value === '') return null;
  
  const numValue = Number(value);
  if (numValue > max) {
    return `Must be no more than ${max}`;
  }
  return null;
};

/**
 * Validate number
 */
export const number = (value) => {
  if (!value) return null;
  
  if (isNaN(Number(value))) {
    return 'Must be a valid number';
  }
  return null;
};

/**
 * Validate pattern
 */
export const pattern = (regex, message) => (value) => {
  if (!value) return null;
  
  if (!regex.test(value)) {
    return message || 'Invalid format';
  }
  return null;
};

/**
 * Validate PAN card number
 */
export const panCard = (value) => {
  if (!value) return null;
  
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if (!panRegex.test(value.toUpperCase())) {
    return 'Please enter a valid PAN card number';
  }
  return null;
};

/**
 * Validate Aadhaar number
 */
export const aadhaar = (value) => {
  if (!value) return null;
  
  const cleanAadhaar = value.replace(/\s/g, '');
  const aadhaarRegex = /^\d{12}$/;
  
  if (!aadhaarRegex.test(cleanAadhaar)) {
    return 'Please enter a valid 12-digit Aadhaar number';
  }
  return null;
};

/**
 * Validate PIN code
 */
export const pinCode = (value) => {
  if (!value) return null;
  
  const pinRegex = /^[1-9][0-9]{5}$/;
  if (!pinRegex.test(value)) {
    return 'Please enter a valid 6-digit PIN code';
  }
  return null;
};

/**
 * Validate IFSC code
 */
export const ifscCode = (value) => {
  if (!value) return null;
  
  const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
  if (!ifscRegex.test(value.toUpperCase())) {
    return 'Please enter a valid IFSC code';
  }
  return null;
};

/**
 * Validate GST number
 */
export const gstNumber = (value) => {
  if (!value) return null;
  
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  if (!gstRegex.test(value.toUpperCase())) {
    return 'Please enter a valid GST number';
  }
  return null;
};

/**
 * Validate password strength
 */
export const password = (value) => {
  if (!value) return null;
  
  if (value.length < 8) {
    return 'Password must be at least 8 characters';
  }
  
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  
  if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
    return 'Password must contain uppercase, lowercase, number, and special character';
  }
  
  return null;
};

/**
 * Validate password confirmation
 */
export const confirmPassword = (passwordValue) => (value) => {
  if (!value) return null;
  
  if (value !== passwordValue) {
    return 'Passwords do not match';
  }
  return null;
};

/**
 * Validate URL
 */
export const url = (value) => {
  if (!value) return null;
  
  try {
    new URL(value);
    return null;
  } catch {
    return 'Please enter a valid URL';
  }
};

/**
 * Validate date (must be in the past)
 */
export const pastDate = (value) => {
  if (!value) return null;
  
  const date = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (date >= today) {
    return 'Date must be in the past';
  }
  return null;
};

/**
 * Validate date (must be in the future)
 */
export const futureDate = (value) => {
  if (!value) return null;
  
  const date = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (date <= today) {
    return 'Date must be in the future';
  }
  return null;
};

/**
 * Compose multiple validators
 */
export const composeValidators = (...validators) => (value) => {
  for (const validator of validators) {
    const error = validator(value);
    if (error) return error;
  }
  return null;
};

export default {
  required,
  email,
  phone,
  minLength,
  maxLength,
  minValue,
  maxValue,
  number,
  pattern,
  panCard,
  aadhaar,
  pinCode,
  ifscCode,
  gstNumber,
  password,
  confirmPassword,
  url,
  pastDate,
  futureDate,
  composeValidators
};

