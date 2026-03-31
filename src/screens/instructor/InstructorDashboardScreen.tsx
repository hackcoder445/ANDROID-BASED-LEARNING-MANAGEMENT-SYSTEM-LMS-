import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

export const InstructorDashboardScreen = () => (
  <FeatureScaffold title="Instructor Dashboard" subtitle="Manage courses, sessions, and analytics">
    <GlassCard><Text style={styles.title}>Overview</Text><Text style={styles.meta}>Students 12,420 • Revenue $21,400 • Active Courses 4 • Avg Rating 4.7</Text></GlassCard>
    <GlassCard><Text style={styles.title}>Course Builder</Text><Text style={styles.meta}>Basic Info ? Curriculum ? Resources ? Settings ? Preview ? Submit</Text><GradientButton title="Open Course Builder" /></GlassCard>
    <GlassCard><Text style={styles.title}>Analytics</Text><Text style={styles.meta}>Enrollments, drop-off heatmaps, quiz averages, and revenue insights.</Text><GradientButton title="View Analytics" /></GlassCard>
    <GlassCard><Text style={styles.title}>Live Class Manager</Text><Text style={styles.meta}>Create sessions, manage upcoming, and publish recordings.</Text><GradientButton title="Create Live Session" /></GlassCard>
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
