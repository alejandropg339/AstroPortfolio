import { ui, defaultLang } from './ui';

export function useTranslations(lang: keyof typeof ui | string) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    const parsedUi = ui as Record<string, Record<string, string>>;
    return parsedUi[lang][key] || ui[defaultLang][key];
  }
}