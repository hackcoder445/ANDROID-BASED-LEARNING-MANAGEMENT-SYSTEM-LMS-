import React, { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

import { GradientButton } from '@/components/common/GradientButton';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Colors, Typography } from '@/constants/theme';

export const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <ScreenContainer scroll>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>We will send a secure reset link to your email.</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor={Colors.textMuted} value={email} onChangeText={setEmail} />
      <GradientButton title="Send Reset Link" fullWidth />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 28 },
  subtitle: { color: Colors.textMuted, fontFamily: Typography.body },
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
