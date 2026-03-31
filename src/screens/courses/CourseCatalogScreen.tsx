import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { CourseCard } from '@/components/cards/CourseCard';
import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { SectionHeader } from '@/components/common/SectionHeader';
import { useCourses } from '@/hooks/useCourses';
import { Colors, Typography } from '@/constants/theme';

export const CourseCatalogScreen = () => {
  const { data, isLoading, error, refetch } = useCourses();

  return (
    <FeatureScaffold title="Course Catalog" subtitle="Discover and level up" loading={isLoading} error={error ? 'Unable to load courses.' : null} onRetry={refetch}>
      <View style={styles.searchRow}>
        <TextInput style={styles.search} placeholder="Search courses" placeholderTextColor={Colors.textMuted} />
        <GlassCard style={styles.iconBtn}><Text style={styles.icon}>?</Text></GlassCard>
      </View>

      <SectionHeader title="Featured" />
      <FlatList horizontal data={data} keyExtractor={(item) => item.id} contentContainerStyle={{ gap: 12 }} renderItem={({ item }) => <CourseCard course={item} />} />

      <SectionHeader title="Learning Paths" />
      <GlassCard><Text style={styles.pathTitle}>Mobile Engineer Path</Text><Text style={styles.meta}>6 courses • 68 hours • 40% complete</Text></GlassCard>

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
  searchRow: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  search: {
    flex: 1,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: Colors.textPrimary,
    backgroundColor: Colors.surface,
    fontFamily: Typography.body,
  },
  iconBtn: { padding: 12, borderRadius: 14 },
  icon: { color: Colors.textPrimary },
  pathTitle: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
