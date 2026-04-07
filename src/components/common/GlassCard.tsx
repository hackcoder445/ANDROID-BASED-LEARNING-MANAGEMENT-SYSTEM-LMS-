import React from 'react';
import { Platform, Pressable, StyleSheet, View, ViewStyle } from 'react-native';

import { Colors, Spacing } from '@/constants/theme';

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

export const GlassCard = ({ children, onPress, style, accessibilityLabel }: Props) => {
  const body = (
    <View style={[styles.card, style]}>
      <View style={styles.topGlow} />
      <View style={styles.edgeGlow} />
      {children}
    </View>
  );

  if (!onPress) return body;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}
    >
      {body}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 22,
  },
  card: {
    backgroundColor: Colors.glass,
    borderWidth: 1,
    borderColor: 'rgba(139,92,246,0.18)',
    borderRadius: 22,
    padding: Spacing.lg,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#5B6EF5',
        shadowOffset: { width: 0, height: 18 },
        shadowOpacity: 0.25,
        shadowRadius: 24,
      },
      android: {
        elevation: 12,
      },
    }),
  },
  topGlow: {
    position: 'absolute',
    top: -20,
    left: 10,
    right: 10,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 18,
  },
  edgeGlow: {
    position: 'absolute',
    right: -40,
    top: -25,
    width: 120,
    height: 120,
    borderRadius: 999,
    backgroundColor: 'rgba(91,110,245,0.2)',
  },
  pressed: {
    transform: [
      { perspective: 1000 },
      { rotateX: '5deg' },
      { rotateY: '-5deg' },
      { translateY: -2 },
      { scale: 0.985 },
    ],
  },
});
