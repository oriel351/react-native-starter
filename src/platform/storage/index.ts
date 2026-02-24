import { asyncStorage } from '@/platform/storage/asyncStorage';
import type { KeyValueStorage } from '@/platform/storage/types';

export const keyValueStorage: KeyValueStorage = asyncStorage;
