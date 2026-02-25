import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';

import { Screen } from '@/ui/layout/Screen';
import { spacing, useTheme } from '@/ui/theme';

export default function HomeScreen() {
  const { t } = useTranslation();
  const { colors, textAlignStart, typography } = useTheme();
  const styles = StyleSheet.create({
    content: {
      alignItems: 'center',
      gap: spacing.base,
      width: '100%',
    },
    title: {
      color: colors.text,
      fontSize: typography.title.fontSize,
      fontWeight: typography.title.fontWeight,
      textAlign: textAlignStart,
    },
  });

  return (
    <Screen centered>
      <View style={styles.content}>
        <Text style={styles.title}>{t('home.hello')}</Text>
      </View>
    </Screen>
  );
}
