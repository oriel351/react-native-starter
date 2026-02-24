import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { requireAuth } from '@/features/auth/guards/requireAuth';
import { AppHeader } from '@/ui/layout/AppHeader';
import { Screen } from '@/ui/layout/Screen';
import { spacing, useTheme } from '@/ui/theme';

export default function HomeScreen() {
  const router = useRouter();
  const { colors, textAlignStart, typography } = useTheme();
  const themedStyles = StyleSheet.create({
    title: {
      color: colors.text,
      fontSize: typography.title.fontSize,
      fontWeight: typography.title.fontWeight,
      textAlign: textAlignStart,
    },
    button: {
      borderColor: colors.border,
    },
    buttonLabel: {
      color: colors.text,
      textAlign: textAlignStart,
    },
  });

  return (
    <Screen header={<AppHeader title="Home" />} centered>
      <View style={styles.content}>
        <Text style={[styles.title, themedStyles.title]}>Home</Text>
        <Pressable
          style={[styles.button, themedStyles.button]}
          onPress={() => {
            requireAuth(() => console.log('saved'));
          }}>
          <Text style={[styles.buttonLabel, themedStyles.buttonLabel]}>Save recipe (requires login)</Text>
        </Pressable>
        <Pressable
          style={[styles.button, themedStyles.button]}
          onPress={() => {
            router.push('/recipe/123');
          }}>
          <Text style={[styles.buttonLabel, themedStyles.buttonLabel]}>Open recipe 123</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    gap: spacing.base,
    width: '100%',
  },
  title: {},
  button: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: spacing.buttonVertical,
    paddingHorizontal: spacing.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
  buttonLabel: {},
});
