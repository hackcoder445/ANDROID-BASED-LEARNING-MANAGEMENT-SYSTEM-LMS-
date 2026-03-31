import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Colors, Typography } from '@/constants/theme';
import { RootStackParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export const SplashScreen = ({ navigation }: Props) => {
  const fullText = 'HackCoder IT Services';
  const [count, setCount] = useState(0);
  const display = useMemo(() => fullText.slice(0, count), [count]);

  useEffect(() => {
    const typing = setInterval(() => setCount((n) => Math.min(n + 1, fullText.length)), 80);
    const timeout = setTimeout(() => navigation.replace('Onboarding'), 2500);
    return () => {
      clearInterval(typing);
      clearTimeout(timeout);
    };
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Text style={styles.logo}>{display}<Text style={styles.cursor}>|</Text></Text>
      <Text style={styles.tag}>HackCoder Academy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  logo: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 32 },
  cursor: { color: Colors.success },
  tag: { color: Colors.textMuted, fontFamily: Typography.body },
});
