import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';

import { AppHeader } from '@/ui/layout/AppHeader';
import { Screen } from '@/ui/layout/Screen';
import { useTheme } from '@/ui/theme';

export default function SearchScreen() {
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
    <Screen header={<AppHeader title={t('search.headerTitle')} />} centered>
      <Text style={styles.title}>{t('search.title')}</Text>
    </Screen>
  );
}
