import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { requireAuth } from '@/features/auth/guards/requireAuth';
import { AppHeader } from '@/ui/layout/AppHeader';
import { Screen } from '@/ui/layout/Screen';
import { spacing, useTheme } from '@/ui/theme';

export default function HomeScreen() {
  const router = useRouter();
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
    buttonLabel: {
      color: colors.text,
      textAlign: textAlignStart,
    },
    button: {
      width: '100%',
      alignItems: 'center',
      paddingVertical: spacing.buttonVertical,
      paddingHorizontal: spacing.md,
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 8,
      borderColor: colors.border,
    },
  });

  return (
    <Screen header={<AppHeader title={t('home.headerTitle')} />} centered>
      <View style={styles.content}>
        <Text style={styles.title}>{t('home.title')}</Text>
        <Pressable
          style={styles.button}
          onPress={() => {
            requireAuth(() => console.log('saved'));
          }}>
          <Text style={styles.buttonLabel}>{t('home.saveRecipeRequiresLogin')}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            router.push('/recipe/123');
          }}>
          <Text style={styles.buttonLabel}>{t('home.openRecipe123')}</Text>
        </Pressable>
      </View>
    </Screen>
  );
}
