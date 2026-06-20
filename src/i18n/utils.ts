import { ui, defaultLang } from './ui';

/**
 * Extracts the language from URL
 * kattus.dev/es/projects will be in Spanishs thanks to /es/ param
 */
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/**
 * Function components uses to translate
 * Returns a function 't' configurated for the detected language
 */
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Function footer uses to get current date in spanish
 * Returns a day, month and year in spanish
 */
export const getFooterDateEs = () => {
  const now = new Date();
  const day = now.getDate();
  const year = now.getFullYear();

  let month = now.toLocaleDateString('es', { month: 'long' });
  month = month.charAt(0).toUpperCase() + month.slice(1);

  return `${day} de ${month} de ${year}`;
};

/**
 * Function footer uses to get current date in english
 * Returns a day, month and year in english
 */
export const getFooterDateEn = () => {
  const now = new Date();
  return `${now.toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' })}`;
};

/**
 * Function footer uses to get current time in 24 hours system
 * Returns a hour and minutes in 24 hours system
 */
export const getFooterTimeEs = () => {
  const now = new Date();
  return `${now.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })}`;
}

/**
 * Function footer uses to get current time in 12 hours system
 * Returns a hour and minutes in 12 hours system
 */
export const getFooterTimeEn = () => {
  const now = new Date();
  return `${now.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' })}`;
}