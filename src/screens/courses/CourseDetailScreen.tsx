import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { mockCourses } from '@/constants/mockData';
import { Colors, Typography } from '@/constants/theme';
import { RootStackParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'CourseDetail'>;

export const CourseDetailScreen = ({ navigation }: Props) => {
  const course = mockCourses[0];
  return (
    <FeatureScaffold title={course.title} subtitle="Course detail">
      <Image source={{ uri: course.thumbnail }} style={styles.hero} />
      <Text style={styles.meta}>? {course.rating} ({course.reviews}) • 18,200 students • Updated Mar 2026</Text>
      <GlassCard>
        <Text style={styles.section}>Instructor</Text>
        <Text style={styles.meta}>Grace Mensah • 120k followers</Text>
      </GlassCard>
      <GlassCard>
        <Text style={styles.section}>What you'll learn</Text>
        <Text style={styles.meta}>Build scalable mobile apps, deep links, offline mode, and testing strategy.</Text>
      </GlassCard>
      <GlassCard>
        <Text style={styles.section}>Syllabus</Text>
        <Text style={styles.meta}>Section 1: Foundations (8 lessons)</Text>
        <Text style={styles.meta}>Section 2: State & APIs (12 lessons)</Text>
      </GlassCard>
      <View style={styles.sticky}>
        <Text style={styles.price}>$49</Text>
        <GradientButton title="Enroll Now" onPress={() => navigation.navigate('VideoPlayer', { courseId: course.id, lessonId: 'l1' })} />
      </View>
    </FeatureScaffold>
  );
};

const styles = StyleSheet.create({
  hero: { width: '100%', aspectRatio: 16 / 9, borderRadius: 16 },
  section: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
  sticky: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  price: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 24 },
});
