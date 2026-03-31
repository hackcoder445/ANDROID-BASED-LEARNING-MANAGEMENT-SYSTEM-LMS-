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
    <LinearGradient colors={[Colors.primary, Colors.secondary]} style={styles.gradient}>
      <Text style={styles.text}>{title}</Text>
    </LinearGradient>
  </Pressable>
);

const styles = StyleSheet.create({
  pressable: { borderRadius: 999 },
  fullWidth: { width: '100%' },
  pressed: { transform: [{ scale: 0.97 }] },
  gradient: {
    borderRadius: 999,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
  },
  text: {
    color: Colors.textPrimary,
    fontFamily: Typography.bodyMedium,
    fontSize: 15,
  },
});
