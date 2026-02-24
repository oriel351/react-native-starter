import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { authStore } from '@/features/auth/store/authStore';
import { AppHeader } from '@/ui/layout/AppHeader';
import { Screen } from '@/ui/layout/Screen';
import { spacing, useTheme } from '@/ui/theme';

export default function AuthModalScreen() {
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
    <Screen header={<AppHeader title="Login / Register" />} centered>
      <View style={styles.content}>
        <Text style={[styles.title, themedStyles.title]}>Login / Register</Text>
        <Pressable
          style={[styles.button, themedStyles.button]}
          onPress={() => {
            authStore.setGuest();
            router.back();
          }}>
          <Text style={[styles.buttonLabel, themedStyles.buttonLabel]}>Continue as Guest</Text>
        </Pressable>
        <Pressable
          style={[styles.button, themedStyles.button]}
          onPress={() => {
            authStore.setLoggedIn();
            router.back();
          }}>
          <Text style={[styles.buttonLabel, themedStyles.buttonLabel]}>Login</Text>
        </Pressable>
        <Pressable
          style={[styles.button, themedStyles.button]}
          onPress={() => {
            authStore.setLoggedIn();
            router.back();
          }}>
          <Text style={[styles.buttonLabel, themedStyles.buttonLabel]}>Register</Text>
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
