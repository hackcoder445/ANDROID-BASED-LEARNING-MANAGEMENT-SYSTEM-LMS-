import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AccessDeniedCard } from '@/components/common/AccessDeniedCard';
import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';
import { useAuthStore } from '@/state/authStore';
import { RootStackParamList } from '@/types/navigation';

export const InstructorDashboardScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const user = useAuthStore((s) => s.user);
  const isAdmin = user?.role === 'admin';

  return (
    <FeatureScaffold title="Admin Console" subtitle="Authorize and create platform content">
      {!isAdmin ? (
        <AccessDeniedCard message="Login with admin@hackcoder.academy to manage courses, analytics, and payouts." />
      ) : (
        <>
          <GlassCard>
            <View style={styles.row}><Ionicons name="people" size={18} color={Colors.info} /><Text style={styles.title}>Platform Overview</Text></View>
            <Text style={styles.meta}>Students 12,420 | Revenue $21,400 | Active Courses 4 | Avg Rating 4.7</Text>
          </GlassCard>

          <GlassCard>
            <View style={styles.row}><MaterialCommunityIcons name="hammer-wrench" size={18} color={Colors.primary} /><Text style={styles.title}>Course Builder</Text></View>
            <Text style={styles.meta}>Create and approve curriculum, resources, and settings.</Text>
            <GradientButton title="Open Course Builder" onPress={() => navigation.navigate('CourseBuilder')} />
          </GlassCard>

          <GlassCard>
            <View style={styles.row}><Ionicons name="analytics" size={18} color={Colors.success} /><Text style={styles.title}>Analytics</Text></View>
            <Text style={styles.meta}>Track enrollments, completion drop-off, and quiz performance.</Text>
            <GradientButton title="View Analytics" onPress={() => navigation.navigate('Analytics', { courseId: 'c1' })} />
          </GlassCard>

          <GlassCard>
            <View style={styles.row}><MaterialCommunityIcons name="cash-multiple" size={18} color={Colors.warning} /><Text style={styles.title}>Revenue and Payouts</Text></View>
            <Text style={styles.meta}>Authorize payouts and monitor fee breakdowns.</Text>
            <GradientButton title="Authorize Payout" />
          </GlassCard>
        </>
      )}
    </FeatureScaffold>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
