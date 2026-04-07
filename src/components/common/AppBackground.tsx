import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from '@/constants/theme';

type Props = {
  children: React.ReactNode;
};

export const AppBackground = ({ children }: Props) => {
  return (
    <LinearGradient colors={[Colors.background, '#121A33', '#1A1F3A']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.root}>
      <View style={styles.orbPrimary} />
      <View style={styles.orbSecondary} />
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: { flex: 1 },
  orbPrimary: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: 'rgba(91,110,245,0.18)',
    top: -60,
    right: -40,
  },
  orbSecondary: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: 'rgba(34,211,160,0.10)',
    bottom: 60,
    left: -40,
  },
});
