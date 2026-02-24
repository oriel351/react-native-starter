import { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { initializeI18n } from '@/i18n';
import { Stack } from '@/platform/navigation';
import { useColorScheme } from '@/ui/theme/useColorScheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isI18nReady, setIsI18nReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    initializeI18n().finally(() => {
      if (isMounted) {
        setIsI18nReady(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isI18nReady) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="auth/modal" options={{ presentation: 'modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
