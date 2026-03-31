import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

const questionTypes = [
  'Multiple Choice',
  'Multiple Select',
  'True / False',
  'Fill in the Blank',
  'Drag and Drop',
  'Matching Pairs',
  'Code Challenge',
];

export const QuizAssessmentScreen = () => {
  const [index, setIndex] = useState(0);
  const total = 10;

  return (
    <FeatureScaffold title="Quizzes & Assessments" subtitle={`Question ${index + 1} of ${total}`}>
      <GlassCard>
        <Text style={styles.title}>Type: {questionTypes[index % questionTypes.length]}</Text>
        <Text style={styles.meta}>Adaptive engine enabled: difficulty changes with streaks.</Text>
      </GlassCard>
      <GlassCard>
        <Text style={styles.meta}>Timer: 00:42</Text>
        <Text style={styles.title}>What is the purpose of signed video URLs?</Text>
      </GlassCard>
      <GradientButton title="Submit Answer" onPress={() => setIndex((i) => Math.min(i + 1, total - 1))} />
      <GradientButton title="Skip (Practice Mode)" />
    </FeatureScaffold>
  );
};

const styles = StyleSheet.create({
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 18 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
