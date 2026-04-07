import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GlassCard } from '@/components/common/GlassCard';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { GradientButton } from '@/components/common/GradientButton';
import { OutlinedButton } from '@/components/common/OutlinedButton';
import { Colors, Typography } from '@/constants/theme';
import { useAppStore } from '@/state/appStore';
import { RootStackParamList } from '@/types/navigation';

const slides = [
  { id: '1', icon: 'school-outline', title: 'Learn from the best', subtitle: 'Expert-led courses with practical projects.' },
  { id: '2', icon: 'videocam-outline', title: 'Join live classes', subtitle: 'Hands-on real-time sessions with instructors.' },
  { id: '3', icon: 'ribbon-outline', title: 'Earn real certificates', subtitle: 'Showcase job-ready credentials.' },
];

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export const OnboardingScreen = ({ navigation }: Props) => {
  const [index, setIndex] = useState(0);
  const listRef = useRef<FlatList<(typeof slides)[number]>>(null);
  const setHasOnboarded = useAppStore((s) => s.setHasOnboarded);

  const finish = () => {
    setHasOnboarded(true);
    navigation.replace('Auth');
  };

  return (
    <ScreenContainer>
      <View style={styles.root}>
        <View style={styles.top}>
          <OutlinedButton title="Skip" onPress={finish} />
        </View>
        <FlatList
          ref={listRef}
          horizontal
          pagingEnabled
          data={slides}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => setIndex(Math.round(e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width))}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <GlassCard style={styles.iconCard}>
                <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={44} color={Colors.primary} />
              </GlassCard>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          )}
        />
        <View style={styles.bottom}>
          <Text style={styles.step}>{index + 1}/3</Text>
          <GradientButton
            title={index === 2 ? 'Get Started' : 'Next'}
            onPress={() => {
              if (index === 2) {
                finish();
                return;
              }
              listRef.current?.scrollToIndex({ index: index + 1, animated: true });
              setIndex((n) => n + 1);
            }}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, gap: 20 },
  top: { alignItems: 'flex-end', paddingTop: 8 },
  slide: { width: 360, alignItems: 'center', justifyContent: 'center', gap: 14, paddingHorizontal: 18 },
  iconCard: { paddingVertical: 20, paddingHorizontal: 28 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 30, textAlign: 'center' },
  subtitle: { color: Colors.textMuted, fontFamily: Typography.body, textAlign: 'center', fontSize: 16 },
  bottom: { alignItems: 'center', gap: 12 },
  step: { color: Colors.textMuted, fontFamily: Typography.body },
});
