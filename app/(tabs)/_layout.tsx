import React from 'react';

import { Tabs } from '@/platform/navigation';
import { HapticTab } from '@/ui/components/HapticTab';
import { IconSymbol } from '@/ui/components/ui/IconSymbol';
import { Colors } from '@/ui/theme/theme';
import { useColorScheme } from '@/ui/theme/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
