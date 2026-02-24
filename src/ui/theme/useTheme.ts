import { I18nManager } from 'react-native';

import { colors } from '@/ui/theme/colors';
import { layout } from '@/ui/theme/layout';
import { spacing } from '@/ui/theme/spacing';
import { typography } from '@/ui/theme/typography';
import { useColorScheme } from '@/ui/theme/useColorScheme';

export function useTheme() {
  const colorScheme = useColorScheme() ?? 'light';

  return {
    colorScheme,
    colors: colors[colorScheme],
    spacing,
    typography,
    layout,
    isRTL: I18nManager.isRTL,
    direction: I18nManager.isRTL ? 'rtl' : 'ltr',
    textAlignStart: I18nManager.isRTL ? 'right' : 'left',
    textAlignEnd: I18nManager.isRTL ? 'left' : 'right',
  } as const;
}
