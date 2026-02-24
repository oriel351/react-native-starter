import AsyncStorage from '@react-native-async-storage/async-storage';

import type { KeyValueStorage } from '@/platform/storage/types';

export const asyncStorage: KeyValueStorage = {
  getItem(key) {
    return AsyncStorage.getItem(key);
  },
  setItem(key, value) {
    return AsyncStorage.setItem(key, value);
  },
};
