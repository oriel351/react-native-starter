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

  const startAction = isRTL ? rightAction : leftAction;
  const endAction = isRTL ? leftAction : rightAction;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderBottomColor: colors.border,
          minHeight: layout.headerMinHeight,
          paddingStart: spacing.screenHorizontal,
          paddingEnd: spacing.screenHorizontal,
          paddingTop: spacing.sm,
          paddingBottom: spacing.sm,
        },
        style,
      ]}>
      <View style={[styles.side, { flexBasis: layout.headerActionWidth }]}>
        {startAction ? (
          <Pressable onPress={startAction.onPress}>
            <Text
              style={[
                styles.actionText,
                { color: colors.primary, fontSize: typography.body.fontSize, textAlign: textAlignStart },
              ]}>
              {startAction.label}
            </Text>
          </Pressable>
        ) : null}
      </View>

      <Text
        style={[
          styles.title,
          {
            color: colors.text,
            fontSize: typography.subtitle.fontSize,
            fontWeight: typography.subtitle.fontWeight,
          },
        ]}>
        {title}
      </Text>

      <View style={[styles.side, styles.sideEnd, { flexBasis: layout.headerActionWidth }]}>
        {endAction ? (
          <Pressable onPress={endAction.onPress}>
            <Text
              style={[
                styles.actionText,
                { color: colors.primary, fontSize: typography.body.fontSize, textAlign: textAlignStart },
              ]}>
              {endAction.label}
            </Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  side: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sideEnd: {
    alignItems: 'flex-end',
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  actionText: {
    lineHeight: 20,
  },
});
