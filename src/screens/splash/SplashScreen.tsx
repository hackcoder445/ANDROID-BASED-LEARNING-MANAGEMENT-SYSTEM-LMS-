import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppBackground } from '@/components/common/AppBackground';
import { Colors, Typography } from '@/constants/theme';
import { useAppStore } from '@/state/appStore';
import { useAuthStore } from '@/state/authStore';
import { RootStackParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export const SplashScreen = ({ navigation }: Props) => {
  const fullText = 'HackCoder IT Services';
  const [count, setCount] = useState(0);
  const display = useMemo(() => fullText.slice(0, count), [count]);
  const hasOnboarded = useAppStore((s) => s.hasOnboarded);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  useEffect(() => {
    const typing = setInterval(() => setCount((n) => Math.min(n + 1, fullText.length)), 80);
    const timeout = setTimeout(() => {
      if (!hasOnboarded) {
        navigation.replace('Onboarding');
      } else if (isAuthenticated) {
        navigation.replace('Main');
      } else {
        navigation.replace('Auth');
      }
    }, 2500);

    return () => {
      clearInterval(typing);
      clearTimeout(timeout);
    };
  }, [navigation, hasOnboarded, isAuthenticated]);

  return (
    <AppBackground>
      <View style={styles.root}>
        <Text style={styles.logo}>{display}<Text style={styles.cursor}>|</Text></Text>
        <Text style={styles.tag}>HackCoder Academy</Text>
      </View>
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  logo: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 32 },
  cursor: { color: Colors.success },
  tag: { color: Colors.textMuted, fontFamily: Typography.body },
});
