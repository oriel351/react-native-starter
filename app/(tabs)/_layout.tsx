import React from 'react';
import { useTranslation } from 'react-i18next';

import { Tabs } from '@/platform/navigation';
import { HapticTab } from '@/ui/components/HapticTab';
import { IconSymbol } from '@/ui/components/ui/IconSymbol';
import { Colors } from '@/ui/theme/theme';
import { useColorScheme } from '@/ui/theme/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: t('tabs.home'),
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="my-recipes"
        options={{
          title: t('tabs.myRecipes'),
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: t('tabs.add'),
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="chevron.right" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t('tabs.profile'),
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="chevron.right" color={color} />,
        }}
      />
    </Tabs>
  );
}
