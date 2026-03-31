import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { mockSessions } from '@/constants/mockData';
import { Colors, Typography } from '@/constants/theme';

export const LiveClassesScreen = () => {
  return (
    <FeatureScaffold title="Live Classes" subtitle="Real-time sessions and replays">
      <GlassCard>
        <Text style={styles.live}>Happening Now</Text>
        <Text style={styles.title}>Frontend Interview Deep Dive</Text>
        <GradientButton title="Join Live" fullWidth />
      </GlassCard>

      {mockSessions.map((session) => (
        <GlassCard key={session.id}>
          <Text style={styles.title}>{session.title}</Text>
          <Text style={styles.meta}>{session.instructor}</Text>
          <Text style={styles.meta}>{new Date(session.startsAt).toLocaleString()}</Text>
          <Text style={styles.meta}>{session.registeredCount}/{session.maxSeats} registered</Text>
          <GradientButton title="Register" />
        </GlassCard>
      ))}
    </FeatureScaffold>
  );
};

const styles = StyleSheet.create({
  live: { color: Colors.danger, fontFamily: Typography.bodyMedium, fontSize: 12 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
