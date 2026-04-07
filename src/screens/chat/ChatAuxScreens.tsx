import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { Colors, Typography } from '@/constants/theme';

export const ThreadViewScreen = () => (
  <FeatureScaffold title="Thread View" subtitle="Replies, votes, and resolution">
    <GlassCard>
      <View style={styles.row}><Ionicons name="chatbox-ellipses" size={18} color={Colors.info} /><Text style={styles.title}>Thread Discussion</Text></View>
      <Text style={styles.meta}>Nested replies with upvotes and marked-as-resolved support.</Text>
    </GlassCard>
  </FeatureScaffold>
);

export const DirectMessageScreen = () => (
  <FeatureScaffold title="Direct Message" subtitle="Office hours and read receipts">
    <GlassCard>
      <View style={styles.row}><MaterialCommunityIcons name="account-clock-outline" size={18} color={Colors.success} /><Text style={styles.title}>Instructor Availability</Text></View>
      <Text style={styles.meta}>Read receipts enabled. Single tick sent, double tick read.</Text>
    </GlassCard>
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
