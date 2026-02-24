import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/ui/theme';
import { spacing } from '@/ui/theme/spacing';

type AppShellProps = {
  children: ReactNode;
  header?: ReactNode;
  scroll?: boolean;
  centered?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export function AppShell({
  children,
  header,
  scroll = false,
  centered = false,
  contentContainerStyle,
}: AppShellProps) {
  const { colors, layout, spacing } = useTheme();
  const themedStyles = StyleSheet.create({
    safeArea: {
      backgroundColor: colors.background,
    },
    content: {
      maxWidth: layout.contentMaxWidth,
      paddingStart: spacing.screenHorizontal,
      paddingEnd: spacing.screenHorizontal,
      paddingTop: spacing.screenVertical,
      paddingBottom: spacing.screenVertical,
    },
  });

  const baseContentStyle = [
    styles.contentBase,
    themedStyles.content,
    scroll ? styles.scrollContent : styles.fillContent,
    centered ? styles.centered : undefined,
    contentContainerStyle,
  ];

  return (
    <SafeAreaView style={[styles.safeArea, themedStyles.safeArea]} edges={['top', 'left', 'right']}>
      {header}
      <View style={styles.body}>
        {scroll ? (
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={baseContentStyle}
            keyboardShouldPersistTaps="handled">
            {children}
          </ScrollView>
        ) : (
          <View style={baseContentStyle}>{children}</View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  contentBase: {
    width: '100%',
    gap: spacing.md,
  },
  fillContent: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
