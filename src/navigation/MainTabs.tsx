import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { HomeDashboardScreen } from '@/screens/home/HomeDashboardScreen';
import { CourseCatalogScreen } from '@/screens/courses/CourseCatalogScreen';
import { LiveClassesScreen } from '@/screens/live/LiveClassesScreen';
import { MyLearningScreen } from '@/screens/progress/MyLearningScreen';
import { ProfileSettingsScreen } from '@/screens/profile/ProfileSettingsScreen';
import { BottomTabParamList } from '@/types/navigation';
import { Colors } from '@/constants/theme';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const iconMap: Record<keyof BottomTabParamList, keyof typeof MaterialIcons.glyphMap> = {
  Home: 'space-dashboard',
  Courses: 'menu-book',
  Live: 'live-tv',
  MyLearning: 'insights',
  Profile: 'person',
};

export const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 18,
        borderRadius: 20,
        backgroundColor: 'rgba(17,20,32,0.92)',
        borderColor: Colors.border,
        borderTopWidth: 1,
        height: 70,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: Colors.textMuted,
      tabBarIcon: ({ color, size, focused }) => (
        <MaterialIcons name={iconMap[route.name as keyof BottomTabParamList]} size={size} color={color} style={{ marginTop: 8, opacity: focused ? 1 : 0.7 }} />
      ),
    })}
  >
    <Tab.Screen name="Home" component={HomeDashboardScreen} />
    <Tab.Screen name="Courses" component={CourseCatalogScreen} />
    <Tab.Screen name="Live" component={LiveClassesScreen} />
    <Tab.Screen name="MyLearning" component={MyLearningScreen} />
    <Tab.Screen name="Profile" component={ProfileSettingsScreen} />
  </Tab.Navigator>
);
