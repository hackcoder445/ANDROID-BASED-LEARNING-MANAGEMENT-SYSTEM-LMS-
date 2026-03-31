import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';

import { Colors, Spacing } from '@/constants/theme';

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

export const GlassCard = ({ children, onPress, style, accessibilityLabel }: Props) => {
  const body = <View style={[styles.card, style]}>{children}</View>;
  if (!onPress) return body;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      {body}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.glass,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 20,
    padding: Spacing.lg,
    overflow: 'hidden',
  },
  pressed: {
    transform: [{ perspective: 900 }, { rotateX: '2deg' }, { rotateY: '-2deg' }, { scale: 0.99 }],
  },
});
