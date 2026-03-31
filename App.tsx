import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import { RootNavigator } from '@/navigation/RootNavigator';
import { linking } from '@/navigation/linking';
import { Colors } from '@/constants/theme';

const queryClient = new QueryClient();

const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: Colors.background,
    card: Colors.surface,
    text: Colors.textPrimary,
    border: Colors.border,
    primary: Colors.primary,
    notification: Colors.danger,
  },
};

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer linking={linking} theme={navTheme}>
        <StatusBar style="light" />
        <RootNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  </GestureHandlerRootView>
);

export default App;
