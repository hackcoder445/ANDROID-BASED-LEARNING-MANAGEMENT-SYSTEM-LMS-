import React from 'react';
import { MotiView } from 'moti';
import { DimensionValue, StyleSheet, View } from 'react-native';

import { Colors } from '@/constants/theme';

type Props = {
  height?: number;
  width?: DimensionValue;
  borderRadius?: number;
};

export const Skeleton = ({ height = 16, width = '100%', borderRadius = 10 }: Props) => (
  <MotiView
    from={{ opacity: 0.25 }}
    animate={{ opacity: 1 }}
    transition={{ type: 'timing', duration: 900, loop: true }}
    style={[styles.skeleton, { height, width, borderRadius }]}
  />
);

export const SkeletonCard = () => (
  <View style={styles.card}>
    <Skeleton height={120} borderRadius={14} />
    <Skeleton height={14} width="80%" />
    <Skeleton height={12} width="40%" />
    <Skeleton height={36} borderRadius={999} />
  </View>
);

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: Colors.primary,
  },
  card: {
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 18,
    padding: 12,
    gap: 10,
  },
});
