import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

export const LiveRoomScreen = () => (
  <FeatureScaffold title="Live Class Room" subtitle="Agora-powered interactive learning">
    <GlassCard>
      <View style={styles.row}><Ionicons name="videocam" size={18} color={Colors.danger} /><Text style={styles.title}>Instructor Feed Live</Text></View>
      <Text style={styles.meta}>Adaptive layout for portrait, landscape, and screen-share mode.</Text>
    </GlassCard>
    <GlassCard>
      <View style={styles.row}><MaterialCommunityIcons name="gesture-tap-button" size={18} color={Colors.primary} /><Text style={styles.title}>Control Bar</Text></View>
      <Text style={styles.meta}>Raise hand, reactions, participant list, and moderated chat.</Text>
      <GradientButton title="Launch Poll" />
      <GradientButton title="Start Breakout Rooms" />
      <GradientButton title="Open Whiteboard" />
    </GlassCard>
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
