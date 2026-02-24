import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DevSettings, I18nManager } from 'react-native';

import { getStoredLanguage, setStoredLanguage } from '@/lib/storage/languageStorage';
import {
  DEFAULT_LANGUAGE,
  isLanguageRTL,
  isSupportedLanguage,
  type AppLanguage,
} from '@/i18n/languages';
import en from '@/i18n/resources/en.json';
import he from '@/i18n/resources/he.json';

const resources = {
  en: { translation: en },
  he: { translation: he },
} as const;

let initPromise: Promise<void> | null = null;

function normalizeLanguage(value: string | null | undefined): AppLanguage {
  return isSupportedLanguage(value) ? value : DEFAULT_LANGUAGE;
}

function syncRTL(language: AppLanguage) {
  const shouldRTL = isLanguageRTL(language);
  const changed = I18nManager.isRTL !== shouldRTL;

  if (changed) {
    I18nManager.allowRTL(shouldRTL);
    I18nManager.forceRTL(shouldRTL);
  }

  return changed;
}

function reloadForDirectionChange() {
  if (__DEV__ && typeof DevSettings.reload === 'function') {
    DevSettings.reload();
    return;
  }

  console.warn('RTL direction changed. Restart the app to apply layout direction.');
}

export async function initializeI18n() {
  if (initPromise) {
    return initPromise;
  }

  initPromise = (async () => {
    const stored = await getStoredLanguage();
    const language = normalizeLanguage(stored);
    const directionChanged = syncRTL(language);

    if (!i18n.isInitialized) {
      await i18n.use(initReactI18next).init({
        resources,
        lng: language,
        fallbackLng: DEFAULT_LANGUAGE,
        interpolation: {
          escapeValue: false,
        },
      });
    } else if (i18n.language !== language) {
      await i18n.changeLanguage(language);
    }

    await setStoredLanguage(language);

    if (directionChanged) {
      reloadForDirectionChange();
    }
  })();

  return initPromise;
}

export async function changeAppLanguage(language: AppLanguage) {
  const normalized = normalizeLanguage(language);
  const directionChanged = syncRTL(normalized);

  await setStoredLanguage(normalized);
  await i18n.changeLanguage(normalized);

  if (directionChanged) {
    reloadForDirectionChange();
  }
}

export { i18n };
