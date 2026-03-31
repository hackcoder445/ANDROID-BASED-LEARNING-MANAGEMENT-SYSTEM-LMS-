import React, { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GradientButton } from '@/components/common/GradientButton';
import { ScreenContainer } from '@/components/common/ScreenContainer';
import { Colors, Typography } from '@/constants/theme';
import { AuthStackParamList } from '@/types/navigation';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export const RegisterScreen = ({ navigation }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScreenContainer scroll>
      <Text style={styles.title}>Create Account</Text>
      <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor={Colors.textMuted} value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor={Colors.textMuted} value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor={Colors.textMuted} secureTextEntry value={password} onChangeText={setPassword} />
      <GradientButton
        title="Create & Continue"
        fullWidth
        onPress={() => navigation.getParent()?.navigate('SkillAssessment' as never)}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 30, marginBottom: 6 },
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
