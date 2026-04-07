import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Colors, Typography } from '@/constants/theme';

export const MagicLinkVerificationScreen = () => {
  const [email, setEmail] = useState('');

  return (
    <ScreenContainer scroll>
      <Text style={styles.title}>Magic Link Login</Text>
      <Text style={styles.subtitle}>Passwordless sign in for quick access.</Text>
      <GlassCard>
        <View style={styles.inputRow}>
          <Ionicons name="mail-unread-outline" size={18} color={Colors.secondary} />
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor={Colors.textMuted} value={email} onChangeText={setEmail} />
        </View>
        <GradientButton title="Send Magic Link" fullWidth />
      </GlassCard>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 28 },
  subtitle: { color: Colors.textMuted, fontFamily: Typography.body },
  inputRow: {
    flexDirection: 'row', alignItems: 'center', gap: 8, borderWidth: 1, borderColor: Colors.border,
    borderRadius: 14, paddingHorizontal: 10, backgroundColor: 'rgba(255,255,255,0.03)', marginBottom: 10,
  },
  input: { flex: 1, color: Colors.textPrimary, paddingVertical: 11, fontFamily: Typography.body },
});
