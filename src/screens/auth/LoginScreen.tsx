import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GradientButton } from '@/components/common/GradientButton';
import { OutlinedButton } from '@/components/common/OutlinedButton';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Colors, Typography } from '@/constants/theme';
import { mockUser } from '@/constants/mockData';
import { useAuthStore } from '@/state/authStore';
import { AuthStackParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export const LoginScreen = ({ navigation }: Props) => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScreenContainer scroll>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Continue your HackCoder Academy journey.</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor={Colors.textMuted} value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor={Colors.textMuted} secureTextEntry value={password} onChangeText={setPassword} />
      <GradientButton title="Login" fullWidth onPress={() => setAuth(mockUser, 'demo-token')} />
      <OutlinedButton title="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
      <OutlinedButton title="Use Magic Link" onPress={() => navigation.navigate('MagicLinkVerification')} />
      <OutlinedButton title="Create Account" onPress={() => navigation.navigate('Register')} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 30 },
  subtitle: { color: Colors.textMuted, fontFamily: Typography.body, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
    color: Colors.textPrimary,
    borderRadius: 14,
    padding: 12,
    fontFamily: Typography.body,
  },
});
