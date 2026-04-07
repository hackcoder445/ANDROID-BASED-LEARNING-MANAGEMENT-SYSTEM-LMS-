import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

export const ChatSystemScreen = () => (
  <FeatureScaffold title="Chat System" subtitle="Channels, study groups, and DMs">
    <GlassCard>
      <View style={styles.row}><Ionicons name="chatbubbles" size={18} color={Colors.info} /><Text style={styles.title}>Course Channels</Text></View>
      <Text style={styles.meta}>Threads, code snippets, reactions, unread badges, typing indicators.</Text>
    </GlassCard>
    <GlassCard>
      <View style={styles.row}><MaterialCommunityIcons name="robot-outline" size={18} color={Colors.secondary} /><Text style={styles.title}>@HackAI Bot</Text></View>
      <Text style={styles.meta}>Answers course questions and escalates to instructors if needed.</Text>
      <GradientButton title="Ask @HackAI" />
    </GlassCard>
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
