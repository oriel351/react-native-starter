import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/ui/components/ThemedText';
import { ThemedView } from '@/ui/components/ThemedView';
import { IconSymbol } from '@/ui/components/ui/IconSymbol';
import { colors, spacing } from '@/ui/theme';
import { useColorScheme } from '@/ui/theme/useColorScheme';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';
  const dynamicStyles = StyleSheet.create({
    chevron: {
      transform: [{ rotate: isOpen ? '90deg' : '0deg' }],
    },
  });

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={theme === 'light' ? colors.light.mutedText : colors.dark.mutedText}
          style={dynamicStyles.chevron}
        />

        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: spacing.lg,
  },
});
