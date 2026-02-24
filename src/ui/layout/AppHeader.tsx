import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';

import { useTheme } from '@/ui/theme';

type HeaderAction = {
  label: string;
  onPress?: () => void;
};

type AppHeaderProps = {
  title: string;
  leftAction?: HeaderAction;
  rightAction?: HeaderAction;
  style?: StyleProp<ViewStyle>;
};

export function AppHeader({ title, leftAction, rightAction, style }: AppHeaderProps) {
  const { colors, isRTL, layout, spacing, textAlignStart, typography } = useTheme();
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surface,
      borderBottomColor: colors.border,
      minHeight: layout.headerMinHeight,
      paddingStart: spacing.screenHorizontal,
      paddingEnd: spacing.screenHorizontal,
      paddingTop: spacing.sm,
      paddingBottom: spacing.sm,
    },
    side: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexBasis: layout.headerActionWidth,
    },
    sideEnd: {
      alignItems: 'flex-end',
    },
    sideWidth: {
      flexBasis: layout.headerActionWidth,
    },
    title: {
      flex: 1,
      textAlign: 'center',
      color: colors.text,
      fontSize: typography.subtitle.fontSize,
      fontWeight: typography.subtitle.fontWeight,
    },
    actionText: {
      color: colors.primary,
      fontSize: typography.body.fontSize,
      textAlign: textAlignStart,
    },
  });

  const startAction = isRTL ? rightAction : leftAction;
  const endAction = isRTL ? leftAction : rightAction;

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.side, styles.sideWidth]}>
        {startAction ? (
          <Pressable onPress={startAction.onPress}>
            <Text style={styles.actionText}>{startAction.label}</Text>
          </Pressable>
        ) : null}
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={[styles.side, styles.sideEnd, styles.sideWidth]}>
        {endAction ? (
          <Pressable onPress={endAction.onPress}>
            <Text style={styles.actionText}>{endAction.label}</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}
