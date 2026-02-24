import type { ReactElement, ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import { AppShell } from '@/ui/layout/AppShell';

type ScreenProps = {
  children: ReactNode;
  header?: ReactNode;
  centered?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

type ScreenComponent = ((props: ScreenProps) => ReactElement) & {
  Scroll: (props: ScreenProps) => ReactElement;
};

const ScreenBase = ((props: ScreenProps) => {
  return <AppShell {...props} />;
}) as ScreenComponent;

ScreenBase.Scroll = (props: ScreenProps) => {
  return <AppShell {...props} scroll />;
};

export const Screen = ScreenBase;
