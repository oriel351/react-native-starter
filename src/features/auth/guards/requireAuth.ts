import { router } from 'expo-router';

import { authStore } from '@/features/auth/store/authStore';

export function requireAuth(onAuthed?: () => void) {
  if (authStore.isGuest) {
    router.push('/auth/modal');
    return;
  }

  onAuthed?.();
}
