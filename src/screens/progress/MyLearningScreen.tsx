import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { ProgressRing } from '@/components/charts/ProgressRing';
import { Colors, Typography } from '@/constants/theme';

export const MyLearningScreen = () => (
  <FeatureScaffold title="My Learning" subtitle="Performance dashboard and growth">
    <GlassCard>
      <View style={styles.row}>
        <MaterialCommunityIcons name="book-open-page-variant" size={18} color={Colors.info} />
        <Text style={styles.title}>Enrolled Courses</Text>
      </View>
      <Text style={styles.meta}>3 in progress | 1 completed</Text>
    </GlassCard>

    <ProgressRing progress={0.54} valueText="54%" subtitle="Overall completion" size={200} />

    <GlassCard>
      <View style={styles.row}>
        <Ionicons name="stats-chart" size={18} color={Colors.success} />
        <Text style={styles.title}>Weekly Stats</Text>
      </View>
      <Text style={styles.meta}>12.2h learned | 8 lessons | avg quiz 86%</Text>
    </GlassCard>

    <GlassCard>
      <View style={styles.row}>
        <Ionicons name="flame" size={18} color={Colors.warning} />
        <Text style={styles.title}>XP and Levels</Text>
      </View>
      <Text style={styles.meta}>Developer | 2240 XP | Next level in 260 XP</Text>
    </GlassCard>

    <GlassCard>
      <View style={styles.row}>
        <MaterialCommunityIcons name="certificate-outline" size={18} color={Colors.secondary} />
        <Text style={styles.title}>Certificates Earned</Text>
      </View>
      <Text style={styles.meta}>2 credentials ready to share.</Text>
    </GlassCard>
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
