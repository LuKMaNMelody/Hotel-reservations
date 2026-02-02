/**
 * Maximum number of guests allowed in the input
 */
export const MAX_GUESTS_INPUT_VALUE = 10;

/**
 * Messages related to user registration.
 */
export const REGISTRATION_MESSAGES = {
  SUCCESS: 'User created successfully. Redirecting to login...',
};

/**
 * Messages related to user login.
 */
export const LOGIN_MESSAGES = {
  FAILED: 'Жарамды электрондық пошта мен құпия сөзді енгізіңіз',
};

/**
 * Represents the default tax details for hotel booking.
 */
export const DEFAULT_TAX_DETAILS =
  'VAT (Kazakhstan): 12% on the total amount';


/**
 * Sorting filter labels
 */
export const SORTING_FILTER_LABELS = Object.freeze({
  PRICE_LOW_TO_HIGH: 'Бағасы: төменнен жоғарыға дейін',
  PRICE_HIGH_TO_LOW: 'Бағасы: жоғарыдан төменге дейін',
  RATING_LOW_TO_HIGH: 'Бағалау: төменнен жоғарыға',
  RATING_HIGH_TO_LOW: 'Рейтинг: жоғарыдан төменге дейін',
});
