// Color constants extracted from tailwind.config.js
// Use these for consistent theming across the application

export const COLORS = {
  primary: '#093819',
  secondary: '#35DEA4',
  tertiary: '#ADB4AF',
  quaternary: '#F6f6d0',
  accent: '#ED8936',
  lightgray: '#EDF2F7',
  darkgray: '#2D3748',
  bgGray: '#F9FAFB',
  success: '#48BB78',
  warning: '#ECC94B',
  error: '#F56565',
  muted: '#718096'
};

// Gradient combinations
export const GRADIENTS = {
  primaryToSecondary: 'from-primary to-secondary',
  darkToLight: 'from-darkgray to-lightgray',
  accentFade: 'from-accent to-accent/50',
  heroGradient: 'from-primary via-primary/90 to-secondary/20'
};

// Shadow presets
export const SHADOWS = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  inner: 'shadow-inner',
  card: 'shadow-lg hover:shadow-xl transition-shadow duration-300'
};

export default COLORS;

