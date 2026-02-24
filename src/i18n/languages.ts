export const SUPPORTED_LANGUAGES = ['en', 'he'] as const;

export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: AppLanguage = 'en';

const RTL_LANGUAGES = new Set<AppLanguage>(['he']);

export function isSupportedLanguage(value: string | null | undefined): value is AppLanguage {
  return !!value && SUPPORTED_LANGUAGES.includes(value as AppLanguage);
}

export function isLanguageRTL(language: AppLanguage) {
  return RTL_LANGUAGES.has(language);
}
