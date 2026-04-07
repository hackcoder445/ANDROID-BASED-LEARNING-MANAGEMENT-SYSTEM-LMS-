import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { AccessDeniedCard } from '@/components/common/AccessDeniedCard';
import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { useAuthStore } from '@/state/authStore';
import { Colors, Typography } from '@/constants/theme';

export const AnalyticsScreen = () => {
  const isAdmin = useAuthStore((s) => s.user?.role === 'admin');

  return (
    <FeatureScaffold title="Platform Analytics" subtitle="Enrollment trends and engagement quality">
      {!isAdmin ? (
        <AccessDeniedCard />
      ) : (
        <>
          <GlassCard><View style={styles.row}><Ionicons name="trending-up" size={18} color={Colors.success} /><Text style={styles.title}>Enrollment Trend</Text></View><Text style={styles.meta}>+18% this month with strong retention in week 2.</Text></GlassCard>
          <GlassCard><View style={styles.row}><MaterialCommunityIcons name="chart-bell-curve" size={18} color={Colors.info} /><Text style={styles.title}>Progress Distribution</Text></View><Text style={styles.meta}>0-25%: 18% | 26-50%: 32% | 51-75%: 27% | 76-100%: 23%</Text></GlassCard>
          <GlassCard><View style={styles.row}><Ionicons name="help-circle" size={18} color={Colors.warning} /><Text style={styles.title}>Q&A Backlog</Text></View><Text style={styles.meta}>12 unanswered questions require admin moderation.</Text></GlassCard>
        </>
      )}
    </FeatureScaffold>
  );
};

export const CourseBuilderScreen = () => {
  const isAdmin = useAuthStore((s) => s.user?.role === 'admin');

  return (
    <FeatureScaffold title="Course Builder" subtitle="Admin-authorized publishing workflow">
      {!isAdmin ? (
        <AccessDeniedCard />
      ) : (
        <>
          <GlassCard><Text style={styles.title}>Step 1: Basic Info</Text><Text style={styles.meta}>Title, category, difficulty, pricing, and thumbnail.</Text></GlassCard>
          <GlassCard><Text style={styles.title}>Step 2: Curriculum</Text><Text style={styles.meta}>Sections, lessons, quizzes, and reorder flow.</Text></GlassCard>
          <GlassCard><Text style={styles.title}>Step 3: Resources</Text><Text style={styles.meta}>Attach files, links, and coding starter packs.</Text></GlassCard>
          <GlassCard><Text style={styles.title}>Step 4-6: Settings, Preview, Submit</Text><Text style={styles.meta}>Enable certificates, prerequisites, then submit for review.</Text></GlassCard>
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
