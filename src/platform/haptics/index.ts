import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

export async function triggerTabPressHaptic() {
  if (Platform.OS !== 'ios') {
    return;
  }

  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
}
