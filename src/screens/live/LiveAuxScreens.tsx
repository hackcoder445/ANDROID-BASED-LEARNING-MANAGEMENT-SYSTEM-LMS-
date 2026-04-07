import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

export const LiveLobbyScreen = () => (
  <FeatureScaffold title="Pre-Class Lobby" subtitle="Agenda, countdown, and device checks">
    <GlassCard>
      <View style={styles.row}><Ionicons name="time" size={18} color={Colors.warning} /><Text style={styles.title}>Starts in 00:12:34</Text></View>
      <Text style={styles.meta}>You are in the right place. Camera and microphone are ready.</Text>
      <GradientButton title="Enter Live Room" />
    </GlassCard>
  </FeatureScaffold>
);

export const BreakoutRoomScreen = () => (
  <FeatureScaffold title="Breakout Room" subtitle="Private video and chat with timer">
    <GlassCard>
      <View style={styles.row}><MaterialCommunityIcons name="account-group" size={18} color={Colors.info} /><Text style={styles.title}>Room B - API Design Team</Text></View>
      <Text style={styles.meta}>5 minutes left notification enabled.</Text>
    </GlassCard>
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
