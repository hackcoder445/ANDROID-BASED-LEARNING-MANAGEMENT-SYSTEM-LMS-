import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { HomeDashboardScreen } from '@/screens/home/HomeDashboardScreen';
import { CourseCatalogScreen } from '@/screens/courses/CourseCatalogScreen';
import { LiveClassesScreen } from '@/screens/live/LiveClassesScreen';
import { MyLearningScreen } from '@/screens/progress/MyLearningScreen';
import { ProfileSettingsScreen } from '@/screens/profile/ProfileSettingsScreen';
import { BottomTabParamList } from '@/types/navigation';
import { Colors } from '@/constants/theme';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const iconMap: Record<keyof BottomTabParamList, { lib: 'ion' | 'mci'; name: string }> = {
  Home: { lib: 'ion', name: 'home' },
  Courses: { lib: 'mci', name: 'book-open-page-variant' },
  Live: { lib: 'ion', name: 'videocam' },
  MyLearning: { lib: 'mci', name: 'chart-line' },
  Profile: { lib: 'ion', name: 'person' },
};

export const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: styles.tab,
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: Colors.textMuted,
      tabBarIcon: ({ color, size, focused }) => {
        const icon = iconMap[route.name as keyof BottomTabParamList];
        return (
          <View style={styles.iconWrap}>
            {icon.lib === 'ion' ? (
              <Ionicons name={icon.name as keyof typeof Ionicons.glyphMap} size={size} color={color} />
            ) : (
              <MaterialCommunityIcons name={icon.name as keyof typeof MaterialCommunityIcons.glyphMap} size={size} color={color} />
            )}
            {focused ? <View style={styles.dot} /> : null}
          </View>
        );
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeDashboardScreen} />
    <Tab.Screen name="Courses" component={CourseCatalogScreen} />
    <Tab.Screen name="Live" component={LiveClassesScreen} />
    <Tab.Screen name="MyLearning" component={MyLearningScreen} />
    <Tab.Screen name="Profile" component={ProfileSettingsScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tab: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 18,
    borderRadius: 28,
    backgroundColor: 'rgba(21,29,52,0.88)',
    borderColor: 'rgba(139,92,246,0.25)',
    borderTopWidth: 1,
    borderWidth: 1,
    height: 74,
    shadowColor: '#5B6EF5',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 22,
    elevation: 12,
  },
  iconWrap: { alignItems: 'center', justifyContent: 'center', marginTop: 10, gap: 4 },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    backgroundColor: Colors.primary,
  },
});
