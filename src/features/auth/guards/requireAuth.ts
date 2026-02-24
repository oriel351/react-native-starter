import { authStore } from '@/features/auth/store/authStore';
import { router } from '@/platform/navigation';

export function requireAuth(onAuthed?: () => void) {
  if (authStore.isGuest) {
    router.push('/auth/modal');
    return;
  }

  onAuthed?.();
}
