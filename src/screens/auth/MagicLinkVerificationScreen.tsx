import React, { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

import { GradientButton } from '@/components/common/GradientButton';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Colors, Typography } from '@/constants/theme';

export const MagicLinkVerificationScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <ScreenContainer scroll>
      <Text style={styles.title}>Magic Link Login</Text>
      <Text style={styles.subtitle}>Passwordless sign in for faster access.</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor={Colors.textMuted} value={email} onChangeText={setEmail} />
      <GradientButton title="Send Magic Link" fullWidth />
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
