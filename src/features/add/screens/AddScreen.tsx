import { StyleSheet, Text } from 'react-native';

import { AppHeader } from '@/ui/layout/AppHeader';
import { Screen } from '@/ui/layout/Screen';
import { useTheme } from '@/ui/theme';

export default function AddScreen() {
  const { colors, textAlignStart, typography } = useTheme();
  const themedStyles = StyleSheet.create({
    title: {
      color: colors.text,
      fontSize: typography.title.fontSize,
      fontWeight: typography.title.fontWeight,
      textAlign: textAlignStart,
    },
  });

  return (
    <Screen header={<AppHeader title="Add" />} centered>
      <Text style={[styles.title, themedStyles.title]}>Add</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {},
});
