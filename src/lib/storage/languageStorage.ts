import { isSupportedLanguage, type AppLanguage } from '@/i18n/languages';
import { keyValueStorage } from '@/platform/storage';

const LANGUAGE_KEY = 'kookit.language';

export async function getStoredLanguage(): Promise<AppLanguage | null> {
  try {
    const value = await keyValueStorage.getItem(LANGUAGE_KEY);

    return value && isSupportedLanguage(value) ? value : null;
  } catch (error) {
    console.warn('Language storage is unavailable.', error);
    return null;
  }
}

export async function setStoredLanguage(language: AppLanguage) {
  try {
    await keyValueStorage.setItem(LANGUAGE_KEY, language);
  } catch (error) {
    console.warn('Failed to persist language in storage.', error);
  }
}
