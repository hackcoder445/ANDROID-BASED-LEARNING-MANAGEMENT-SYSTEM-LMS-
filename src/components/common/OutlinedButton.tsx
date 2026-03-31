import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { Colors, Spacing, Typography } from '@/constants/theme';

type Props = {
  title: string;
  onPress?: () => void;
  accessibilityLabel?: string;
};

export const OutlinedButton = ({ title, onPress, accessibilityLabel }: Props) => (
  <Pressable
    onPress={onPress}
    accessibilityRole="button"
    accessibilityLabel={accessibilityLabel ?? title}
    style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
  >
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 999,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
  },
  pressed: { opacity: 0.8 },
  text: {
    color: Colors.primary,
    fontFamily: Typography.bodyMedium,
    fontSize: 14,
  },
});
