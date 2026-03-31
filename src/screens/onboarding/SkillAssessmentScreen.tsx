import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GradientButton } from '@/components/common/GradientButton';
import { OutlinedButton } from '@/components/common/OutlinedButton';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Colors, Typography } from '@/constants/theme';
import { RootStackParamList } from '@/types/navigation';

const questions = Array.from({ length: 10 }).map((_, i) => ({
  id: `q${i + 1}`,
  text: `Assessment question ${i + 1}`,
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
}));

type Props = NativeStackScreenProps<RootStackParamList, 'SkillAssessment'>;

export const SkillAssessmentScreen = ({ navigation }: Props) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const current = questions[index];
  const done = index >= questions.length;

  const level = useMemo(() => {
    if (score > 7) return 'Advanced';
    if (score > 4) return 'Intermediate';
    return 'Beginner';
  }, [score]);

  if (done) {
    return (
      <ScreenContainer scroll>
        <Text style={styles.title}>Detected Level: {level}</Text>
        <Text style={styles.subtitle}>Recommended path: {level} Developer Track</Text>
        <GradientButton title="Continue to App" fullWidth onPress={() => navigation.replace('Main')} />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer scroll>
      <Text style={styles.title}>Skill Assessment</Text>
      <Text style={styles.subtitle}>Question {index + 1} of 10</Text>
      <View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${((index + 1) / 10) * 100}%` }]} /></View>
      <Text style={styles.question}>{current.text}</Text>
      {current.options.map((option) => (
        <OutlinedButton
          key={option}
          title={option}
          onPress={() => {
            setScore((s) => s + (option === 'Option A' ? 1 : 0));
            setIndex((n) => n + 1);
          }}
        />
      ))}
      <GradientButton title="Skip" onPress={() => navigation.replace('Main')} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 30 },
  subtitle: { color: Colors.textMuted, fontFamily: Typography.body },
  progressTrack: {
    height: 8,
    backgroundColor: Colors.surface,
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: Colors.primary },
  question: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 18, marginVertical: 8 },
});
