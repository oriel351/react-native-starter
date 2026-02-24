import { Platform } from 'react-native';
import { colors } from '@/ui/theme/colors';

// Backwards-compatible theme contract used across existing app code.
export const Colors = {
  light: {
    text: colors.light.text,
    background: colors.light.background,
    tint: colors.light.primary,
    icon: colors.light.mutedText,
    tabIconDefault: colors.light.mutedText,
    tabIconSelected: colors.light.primary,
  },
  dark: {
    text: colors.dark.text,
    background: colors.dark.background,
    tint: colors.dark.primary,
    icon: colors.dark.mutedText,
    tabIconDefault: colors.dark.mutedText,
    tabIconSelected: colors.dark.primary,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
