import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CourseCard } from '@/components/cards/CourseCard';
import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ProgressRing } from '@/components/charts/ProgressRing';
import { mockCourses, mockSessions, mockUser } from '@/constants/mockData';
import { Colors, Typography } from '@/constants/theme';
import { RootStackParamList } from '@/types/navigation';

export const HomeDashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <FeatureScaffold title={`Good morning, ${mockUser.name}`} subtitle="Ready for your next skill boost?">
      <View style={styles.quickActions}>
        <GradientButton title="Notifications" onPress={() => navigation.navigate('NotificationCenter')} />
        <GradientButton title="Continue" onPress={() => navigation.navigate('Main')} />
      </View>

      <GlassCard>
        <View style={styles.rowBetween}>
          <View style={styles.rowIcon}>
            <Ionicons name="radio" size={18} color={Colors.danger} />
            <Text style={styles.live}>LIVE IN 12:34</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={Colors.textMuted} />
        </View>
        <Text style={styles.title}>System Design Office Hours</Text>
        <Text style={styles.meta}>with Tolu Adebayo</Text>
        <GradientButton title="Join Now" fullWidth />
      </GlassCard>

      <ProgressRing progress={0.68} valueText="102m / 150m" subtitle="7 day streak" />

      <SectionHeader title="Continue Learning" />
      <CourseCard course={mockCourses[0]} action="Continue" />

      <SectionHeader title="Picked for you" />
      <FlatList
        horizontal
        data={mockCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseCard course={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      />

      <SectionHeader title="Upcoming Live Classes" />
      {mockSessions.map((s) => (
        <GlassCard key={s.id}>
          <View style={styles.rowIcon}>
            <MaterialCommunityIcons name="calendar-clock" size={18} color={Colors.info} />
            <Text style={styles.title}>{s.title}</Text>
          </View>
          <Text style={styles.meta}>{new Date(s.startsAt).toLocaleString()}</Text>
          <GradientButton title="Register" />
        </GlassCard>
      ))}

      <SectionHeader title="Leaderboard Preview" rightText="View Full" />
      <GlassCard>
        <Text style={styles.meta}>1. Ada Obi - 220 XP</Text>
        <Text style={styles.meta}>2. Femi Dan - 208 XP</Text>
        <Text style={styles.meta}>3. Zara Li - 201 XP</Text>
      </GlassCard>

      <SectionHeader title="Announcements" />
      <GlassCard>
        <View style={styles.rowIcon}>
          <Ionicons name="megaphone" size={16} color={Colors.warning} />
          <Text style={styles.title}>Platform Update</Text>
        </View>
        <Text style={styles.meta}>New quiz engine and faster video playback released.</Text>
      </GlassCard>
    </FeatureScaffold>
  );
};

const styles = StyleSheet.create({
  quickActions: { flexDirection: 'row', gap: 8 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rowIcon: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  live: { color: Colors.danger, fontFamily: Typography.bodyMedium, fontSize: 12 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
