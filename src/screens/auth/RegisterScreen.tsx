import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Colors, Typography } from '@/constants/theme';
import { useAppStore } from '@/state/appStore';
import { AuthStackParamList } from '@/types/navigation';
import { Role } from '@/types/models';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export const RegisterScreen = ({ navigation }: Props) => {
  const setRole = useAppStore((s) => s.setRole);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setSelectedRole] = useState<Role>('student');

  return (
    <ScreenContainer scroll>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Choose your role and continue onboarding.</Text>

      <GlassCard>
        <View style={styles.inputRow}>
          <Ionicons name="person-outline" size={18} color={Colors.primary} />
          <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor={Colors.textMuted} value={name} onChangeText={setName} />
        </View>
        <View style={styles.inputRow}>
          <Ionicons name="mail-outline" size={18} color={Colors.info} />
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor={Colors.textMuted} value={email} onChangeText={setEmail} />
        </View>
        <View style={styles.inputRow}>
          <Ionicons name="lock-closed-outline" size={18} color={Colors.secondary} />
          <TextInput style={styles.input} placeholder="Password" placeholderTextColor={Colors.textMuted} secureTextEntry value={password} onChangeText={setPassword} />
        </View>

        <View style={styles.roleRow}>
          {(['student', 'instructor', 'enterprise'] as Role[]).map((r) => (
            <View key={r} style={[styles.rolePill, role === r && styles.rolePillActive]}>
              <Text style={[styles.roleText, role === r && styles.roleTextActive]} onPress={() => setSelectedRole(r)}>{r}</Text>
            </View>
          ))}
        </View>

        <GradientButton
          title="Create & Continue"
          fullWidth
          onPress={() => {
            setRole(role);
            navigation.getParent()?.navigate('SkillAssessment' as never);
          }}
        />
      </GlassCard>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 30, marginBottom: 4 },
  subtitle: { color: Colors.textMuted, fontFamily: Typography.body, marginBottom: 8 },
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
  roleRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginBottom: 12 },
  rolePill: { borderWidth: 1, borderColor: Colors.border, borderRadius: 999, paddingVertical: 6, paddingHorizontal: 10 },
  rolePillActive: { borderColor: Colors.primary, backgroundColor: 'rgba(91,110,245,0.25)' },
  roleText: { color: Colors.textMuted, fontFamily: Typography.bodyMedium, textTransform: 'capitalize' },
  roleTextActive: { color: Colors.textPrimary },
});
