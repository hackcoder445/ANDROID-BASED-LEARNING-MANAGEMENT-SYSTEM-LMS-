import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

export const SubscriptionScreen = () => (
  <FeatureScaffold title="Billing & Subscription" subtitle="Plans, upgrades, and payment history">
    <GlassCard><View style={styles.row}><Ionicons name="card-outline" size={18} color={Colors.info} /><Text style={styles.plan}>Current Plan: Pro</Text></View><Text style={styles.meta}>Renews monthly | next billing April 30, 2026</Text></GlassCard>
    <GlassCard><View style={styles.row}><MaterialCommunityIcons name="leaf" size={18} color={Colors.success} /><Text style={styles.plan}>Free</Text></View><Text style={styles.meta}>Basic access to selected courses</Text></GlassCard>
    <GlassCard><View style={styles.row}><MaterialCommunityIcons name="rocket-launch-outline" size={18} color={Colors.primary} /><Text style={styles.plan}>Pro</Text></View><Text style={styles.meta}>All courses, live classes, certificates</Text></GlassCard>
    <GlassCard><View style={styles.row}><MaterialCommunityIcons name="office-building" size={18} color={Colors.secondary} /><Text style={styles.plan}>Enterprise</Text></View><Text style={styles.meta}>SSO, team seats, analytics and support</Text></GlassCard>
    <GradientButton title="Upgrade with Stripe" fullWidth />
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  plan: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 18 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
