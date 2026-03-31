import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

export const NotificationCenterScreen = () => (
  <FeatureScaffold title="Notification Center" subtitle="All activity and reminders">
    <GlassCard>
      <Text style={styles.type}>Live Class</Text>
      <Text style={styles.title}>Live class starts in 30 minutes</Text>
      <Text style={styles.meta}>Tap to join directly</Text>
    </GlassCard>
    <GlassCard>
      <Text style={styles.type}>Streak</Text>
      <Text style={styles.title}>Your streak is at risk today</Text>
      <Text style={styles.meta}>2 hours left before midnight</Text>
    </GlassCard>
    <GradientButton title="Mark All Read" fullWidth />
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  type: { color: Colors.info, fontFamily: Typography.bodyMedium, fontSize: 12 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
