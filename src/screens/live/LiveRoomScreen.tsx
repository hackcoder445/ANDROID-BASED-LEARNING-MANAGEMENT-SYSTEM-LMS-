import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

export const LiveRoomScreen = () => (
  <FeatureScaffold title="Live Class Room" subtitle="Agora-powered live learning">
    <GlassCard>
      <Text style={styles.title}>Instructor Video Tile</Text>
      <Text style={styles.meta}>Adaptive layout: portrait + landscape + screen share mode</Text>
    </GlassCard>
    <GlassCard>
      <Text style={styles.title}>Controls</Text>
      <Text style={styles.meta}>Raise Hand, Chat, Participants, Reactions, Leave</Text>
      <GradientButton title="Launch Poll" />
      <GradientButton title="Start Breakout Rooms" />
      <GradientButton title="Open Whiteboard" />
    </GlassCard>
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
