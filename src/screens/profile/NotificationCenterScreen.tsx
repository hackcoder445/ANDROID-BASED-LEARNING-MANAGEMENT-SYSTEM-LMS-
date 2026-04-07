import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

export const NotificationCenterScreen = () => (
  <FeatureScaffold title="Notification Center" subtitle="All activity and reminders">
    <GlassCard>
      <View style={styles.row}><Ionicons name="videocam-outline" size={18} color={Colors.danger} /><Text style={styles.title}>Live class starts in 30 minutes</Text></View>
      <Text style={styles.meta}>Tap to join directly</Text>
    </GlassCard>
    <GlassCard>
      <View style={styles.row}><Ionicons name="flame-outline" size={18} color={Colors.warning} /><Text style={styles.title}>Your streak is at risk today</Text></View>
      <Text style={styles.meta}>2 hours left before midnight</Text>
    </GlassCard>
    <GradientButton title="Mark All Read" fullWidth />
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 15 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
