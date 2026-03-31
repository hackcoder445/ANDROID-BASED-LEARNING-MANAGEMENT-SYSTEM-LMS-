import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GradientButton } from './GradientButton';
import { Colors, Typography } from '@/constants/theme';

type Props = {
  title: string;
  subtitle: string;
  actionLabel?: string;
  onAction?: () => void;
};

export const EmptyState = ({ title, subtitle, actionLabel = 'Explore', onAction }: Props) => (
  <View style={styles.wrap}>
    <Text style={styles.illustration}>?</Text>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
    <GradientButton title={actionLabel} onPress={onAction} />
  </View>
);

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', gap: 10, paddingVertical: 20 },
  illustration: { color: Colors.primary, fontSize: 40 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 18 },
  subtitle: { color: Colors.textMuted, textAlign: 'center', fontFamily: Typography.body },
});
