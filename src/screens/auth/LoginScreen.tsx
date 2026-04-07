import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { OutlinedButton } from '@/components/common/OutlinedButton';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { demoAccounts } from '@/constants/auth';
import { Colors, Typography } from '@/constants/theme';
import { useAppStore } from '@/state/appStore';
import { useAuthStore } from '@/state/authStore';
import { AuthStackParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export const LoginScreen = ({ navigation }: Props) => {
  const setAuth = useAuthStore((s) => s.setAuth);
  const setRole = useAppStore((s) => s.setRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = () => {
    const account = demoAccounts.find(
      (item) => item.email.toLowerCase() === email.trim().toLowerCase() && item.password === password
    );

    if (!account) {
      setError('Invalid credentials. Use the demo credentials shown below.');
      return;
    }

    setError('');
    setRole(account.user.role);
    setAuth(account.user, `demo-token-${account.user.role}`);
    navigation.getParent()?.navigate('Main' as never);
  };

  return (
    <ScreenContainer scroll>
      <Text style={styles.title}>Secure Login</Text>
      <Text style={styles.subtitle}>Sign in to HackCoder Academy</Text>

      <GlassCard>
        <View style={styles.inputRow}>
          <Ionicons name="mail-outline" size={18} color={Colors.info} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={Colors.textMuted}
            value={email}
            autoCapitalize="none"
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputRow}>
          <Ionicons name="lock-closed-outline" size={18} color={Colors.secondary} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={Colors.textMuted}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {!!error && <Text style={styles.error}>{error}</Text>}

        <GradientButton title="Login" fullWidth onPress={login} />
      </GlassCard>

      <GlassCard>
        <Text style={styles.demoTitle}>Demo Accounts</Text>
        <Text style={styles.demo}>Admin: admin@hackcoder.academy / Admin@12345</Text>
        <Text style={styles.demo}>Instructor: instructor@hackcoder.academy / Instructor@12345</Text>
        <Text style={styles.demo}>Student: student@hackcoder.academy / Student@12345</Text>
      </GlassCard>

      <OutlinedButton title="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
      <OutlinedButton title="Use Magic Link" onPress={() => navigation.navigate('MagicLinkVerification')} />
      <OutlinedButton title="Create Account" onPress={() => navigation.navigate('Register')} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 30 },
  subtitle: { color: Colors.textMuted, fontFamily: Typography.body, marginBottom: 10 },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 14,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.03)',
    marginBottom: 10,
  },
  input: { flex: 1, color: Colors.textPrimary, paddingVertical: 11, fontFamily: Typography.body },
  error: { color: Colors.danger, fontFamily: Typography.body, fontSize: 12, marginBottom: 8 },
  demoTitle: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16, marginBottom: 6 },
  demo: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
