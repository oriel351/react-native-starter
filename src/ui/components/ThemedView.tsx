import { StyleSheet, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/ui/theme/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const styles = StyleSheet.create({
    background: {
      backgroundColor,
    },
  });

  return <View style={[styles.background, style]} {...otherProps} />;
}
