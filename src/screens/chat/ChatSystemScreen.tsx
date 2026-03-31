import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

export const ChatSystemScreen = () => (
  <FeatureScaffold title="Full Chat System" subtitle="Stream channels, DMs, and study groups">
    <GlassCard>
      <Text style={styles.title}>Course Channels</Text>
      <Text style={styles.meta}>Threads, code snippets, reactions, unread badges, typing indicators.</Text>
    </GlassCard>
    <GlassCard>
      <Text style={styles.title}>@HackAI Bot</Text>
      <Text style={styles.meta}>Answers course questions from transcripts/docs with escalation option.</Text>
      <GradientButton title="Ask @HackAI" />
    </GlassCard>
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
