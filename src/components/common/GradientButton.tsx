import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Colors, Spacing, Typography } from '@/constants/theme';
import { triggerHaptic } from '@/utils/haptics';

type Props = {
  title: string;
  onPress?: () => void;
  fullWidth?: boolean;
  accessibilityLabel?: string;
};

export const GradientButton = ({ title, onPress, fullWidth, accessibilityLabel }: Props) => (
  <Pressable
    onPressIn={() => triggerHaptic('light')}
    onPress={onPress}
    accessibilityRole="button"
    accessibilityLabel={accessibilityLabel ?? title}
    style={({ pressed }) => [styles.pressable, fullWidth && styles.fullWidth, pressed && styles.pressed]}
  >
    <LinearGradient colors={['#6C7CFF', '#8B5CF6', '#4F46E5']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.gradient}>
      <Text style={styles.text}>{title}</Text>
    </LinearGradient>
  </Pressable>
);

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 999,
    shadowColor: '#5B6EF5',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.28,
    shadowRadius: 14,
    elevation: 8,
  },
  fullWidth: { width: '100%' },
  pressed: { transform: [{ scale: 0.965 }] },
  gradient: {
    borderRadius: 999,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  text: {
    color: Colors.textPrimary,
    fontFamily: Typography.bodyMedium,
    fontSize: 15,
    letterSpacing: 0.25,
  },
});
