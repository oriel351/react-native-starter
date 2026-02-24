import { StyleSheet, Text } from 'react-native';

import { AppHeader } from '@/ui/layout/AppHeader';
import { Screen } from '@/ui/layout/Screen';
import { useTheme } from '@/ui/theme';

export default function CookingModeScreen() {
  const { colors, textAlignStart, typography } = useTheme();

  return (
    <Screen header={<AppHeader title="Cooking Mode" />} centered>
      <Text
        style={[
          styles.title,
          {
            color: colors.text,
            fontSize: typography.title.fontSize,
            fontWeight: typography.title.fontWeight,
            textAlign: textAlignStart,
          },
        ]}>
        Cooking Mode
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {},
});
