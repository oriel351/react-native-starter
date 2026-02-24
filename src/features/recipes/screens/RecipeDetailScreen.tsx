import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';

import { useLocalSearchParams } from '@/platform/navigation';
import { AppHeader } from '@/ui/layout/AppHeader';
import { Screen } from '@/ui/layout/Screen';
import { useTheme } from '@/ui/theme';

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { t } = useTranslation();
  const { colors, textAlignStart, typography } = useTheme();
  const styles = StyleSheet.create({
    title: {
      color: colors.text,
      fontSize: typography.title.fontSize,
      fontWeight: typography.title.fontWeight,
      textAlign: textAlignStart,
    },
  });

  return (
    <Screen header={<AppHeader title={t('recipes.detailHeaderTitle')} />} centered>
      <Text style={styles.title}>{t('recipes.detailTitle', { id: id ?? '' })}</Text>
    </Screen>
  );
}
