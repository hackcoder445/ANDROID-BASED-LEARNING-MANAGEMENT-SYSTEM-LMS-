import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

export const SubscriptionScreen = () => (
  <FeatureScaffold title="Billing & Subscription" subtitle="Free, Pro, and Enterprise plans">
    <GlassCard><Text style={styles.plan}>Current Plan: Pro</Text><Text style={styles.meta}>Renews monthly • next billing April 30, 2026</Text></GlassCard>
    <GlassCard><Text style={styles.plan}>Free</Text><Text style={styles.meta}>Basic access to selected courses</Text></GlassCard>
    <GlassCard><Text style={styles.plan}>Pro</Text><Text style={styles.meta}>All courses, live classes, certificates</Text></GlassCard>
    <GlassCard><Text style={styles.plan}>Enterprise</Text><Text style={styles.meta}>SSO, team seats, analytics and support</Text></GlassCard>
    <GradientButton title="Upgrade with Stripe" fullWidth />
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  plan: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 18 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
