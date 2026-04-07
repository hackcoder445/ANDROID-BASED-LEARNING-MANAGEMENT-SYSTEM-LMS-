import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { CourseCard } from '@/components/cards/CourseCard';
import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { useCourses } from '@/hooks/useCourses';
import { Colors, Typography } from '@/constants/theme';

export const CourseCatalogScreen = () => {
  const { data, isLoading, error, refetch } = useCourses();

  return (
    <FeatureScaffold
      title="Course Catalog"
      subtitle="Find your next roadmap"
      loading={isLoading}
      error={error ? 'Unable to load courses.' : null}
      onRetry={refetch}
    >
      <GlassCard style={styles.searchWrap}>
        <View style={styles.searchRow}>
          <Ionicons name="search" size={18} color={Colors.textMuted} />
          <TextInput style={styles.search} placeholder="Search courses" placeholderTextColor={Colors.textMuted} />
          <MaterialCommunityIcons name="microphone-outline" size={18} color={Colors.info} />
        </View>
      </GlassCard>

      <View style={styles.filterRow}>
        <GlassCard style={styles.pill}><Text style={styles.pillText}>Frontend</Text></GlassCard>
        <GlassCard style={styles.pill}><Text style={styles.pillText}>Backend</Text></GlassCard>
        <GlassCard style={styles.pill}><Text style={styles.pillText}>AI/ML</Text></GlassCard>
      </View>

      <SectionHeader title="Featured" />
      <FlatList horizontal data={data} keyExtractor={(item) => item.id} contentContainerStyle={{ gap: 12 }} renderItem={({ item }) => <CourseCard course={item} />} showsHorizontalScrollIndicator={false} />

      <SectionHeader title="Learning Paths" />
      <GlassCard>
        <View style={styles.pathRow}>
          <MaterialCommunityIcons name="map-marker-path" size={20} color={Colors.success} />
          <Text style={styles.pathTitle}>Mobile Engineer Path</Text>
        </View>
        <Text style={styles.meta}>6 courses | 68 hours | 40% complete</Text>
      </GlassCard>

      <SectionHeader title="All Courses" />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => <CourseCard course={item} />}
      />
    </FeatureScaffold>
  );
};

const styles = StyleSheet.create({
  searchWrap: { paddingVertical: 10 },
  searchRow: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  search: {
    flex: 1,
    color: Colors.textPrimary,
    fontFamily: Typography.body,
    fontSize: 14,
  },
  filterRow: { flexDirection: 'row', gap: 8 },
  pill: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 999 },
  pillText: { color: Colors.textPrimary, fontFamily: Typography.bodyMedium, fontSize: 12 },
  pathRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  pathTitle: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
