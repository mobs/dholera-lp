/**
 * Library Utilities Barrel Export
 * Import all utility functions from a single entry point
 * 
 * Usage:
 * import { formatPrice, calculateEMI, required, email } from '@/lib';
 */

export * from './utils';
export * from './validations';
export { default as utils } from './utils';
export { default as validations } from './validations';

