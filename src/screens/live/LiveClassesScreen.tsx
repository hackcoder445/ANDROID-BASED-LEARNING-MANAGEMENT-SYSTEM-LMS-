import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { mockSessions } from '@/constants/mockData';
import { Colors, Typography } from '@/constants/theme';

export const LiveClassesScreen = () => {
  return (
    <FeatureScaffold title="Live Classes" subtitle="Interactive real-time rooms">
      <GlassCard>
        <View style={styles.row}>
          <Ionicons name="radio" size={18} color={Colors.danger} />
          <Text style={styles.live}>Happening Now</Text>
        </View>
        <Text style={styles.title}>Frontend Interview Deep Dive</Text>
        <Text style={styles.meta}>Real-time Q and A + code review</Text>
        <GradientButton title="Join Live" fullWidth />
      </GlassCard>

      {mockSessions.map((session) => (
        <GlassCard key={session.id}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="calendar-clock" size={18} color={Colors.info} />
            <Text style={styles.title}>{session.title}</Text>
          </View>
          <Text style={styles.meta}>{session.instructor}</Text>
          <Text style={styles.meta}>{new Date(session.startsAt).toLocaleString()}</Text>
          <View style={styles.row}>
            <Ionicons name="people" size={14} color={Colors.textMuted} />
            <Text style={styles.meta}>{session.registeredCount}/{session.maxSeats} registered</Text>
          </View>
          <GradientButton title="Register" />
        </GlassCard>
      ))}
    </FeatureScaffold>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  live: { color: Colors.danger, fontFamily: Typography.bodyMedium, fontSize: 12 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
