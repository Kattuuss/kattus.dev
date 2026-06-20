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