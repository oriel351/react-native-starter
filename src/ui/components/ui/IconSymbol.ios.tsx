import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { SymbolView, SymbolViewProps, SymbolWeight } from '@/platform/icons/symbols';

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: SymbolViewProps['name'];
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  const dynamicStyles = StyleSheet.create({
    size: {
      width: size,
      height: size,
    },
  });

  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={name}
      style={[dynamicStyles.size, style]}
    />
  );
}
