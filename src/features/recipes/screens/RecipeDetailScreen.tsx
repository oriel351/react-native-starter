import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

import { AppHeader } from '@/ui/layout/AppHeader';
import { Screen } from '@/ui/layout/Screen';
import { useTheme } from '@/ui/theme';

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { colors, textAlignStart, typography } = useTheme();

  return (
    <Screen header={<AppHeader title="Recipe Detail" />} centered>
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
        {`Recipe Detail: ${id ?? ''}`}
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {},
});
