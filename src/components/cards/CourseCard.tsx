import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Course } from '@/types/models';
import { Colors, Typography } from '@/constants/theme';
import { GradientButton } from '@/components/common/GradientButton';

type Props = {
  course: Course;
  onPress?: () => void;
  action?: 'Enroll' | 'Continue';
};

const difficultyColor = {
  Beginner: Colors.success,
  Intermediate: Colors.warning,
  Advanced: Colors.danger,
};

export const CourseCard = ({ course, onPress, action = 'Enroll' }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Open ${course.title}`}
      style={({ pressed }) => [styles.wrap, pressed && styles.pressed]}
    >
      <Image source={{ uri: course.thumbnail }} style={styles.thumb} />
      <View style={[styles.badge, { backgroundColor: difficultyColor[course.difficulty] }]}>
        <Text style={styles.badgeText}>{course.difficulty}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>{course.title}</Text>
        <Text style={styles.meta}>{course.instructor}</Text>
        <Text style={styles.meta}>? {course.rating} ({course.reviews})</Text>
        <Text style={styles.meta}>{course.durationHours}h • {course.lessons} lessons</Text>
        <Text style={styles.price}>{course.price === 0 ? 'FREE' : `$${course.price}`}</Text>
        {typeof course.progress === 'number' ? (
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${course.progress * 100}%` }]} />
          </View>
        ) : null}
        <GradientButton title={action} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: 220,
    backgroundColor: Colors.glass,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 20,
    overflow: 'hidden',
  },
  pressed: {
    transform: [{ perspective: 900 }, { rotateX: '2deg' }, { rotateY: '-3deg' }, { scale: 0.99 }],
  },
  thumb: { width: '100%', height: 120 },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: { color: '#fff', fontFamily: Typography.bodyMedium, fontSize: 11 },
  body: { padding: 12, gap: 6 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 14 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
  price: { color: Colors.info, fontFamily: Typography.bodyMedium, fontSize: 12 },
  progressTrack: {
    height: 7,
    borderRadius: 999,
    backgroundColor: Colors.surface,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: Colors.success },
});
