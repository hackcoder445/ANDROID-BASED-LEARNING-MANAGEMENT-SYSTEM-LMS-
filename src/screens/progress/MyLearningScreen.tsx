import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { ProgressRing } from '@/components/charts/ProgressRing';
import { Colors, Typography } from '@/constants/theme';

export const MyLearningScreen = () => (
  <FeatureScaffold title="My Learning" subtitle="Progress, streaks, and certificates">
    <GlassCard>
      <Text style={styles.title}>Enrolled Courses</Text>
      <Text style={styles.meta}>3 in progress • 1 completed</Text>
    </GlassCard>

    <ProgressRing progress={0.54} valueText="54%" subtitle="Overall completion" size={200} />

    <GlassCard>
      <Text style={styles.title}>Weekly Stats</Text>
      <Text style={styles.meta}>12.2h learned • 8 lessons • avg quiz 86%</Text>
    </GlassCard>

    <GlassCard>
      <Text style={styles.title}>XP & Levels</Text>
      <Text style={styles.meta}>Developer • 2240 XP • Next level in 260 XP</Text>
    </GlassCard>

    <GlassCard>
      <Text style={styles.title}>Certificates Earned</Text>
      <Text style={styles.meta}>2 credentials ready to share.</Text>
    </GlassCard>
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
