import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';
import { useAppStore } from '@/state/appStore';
import { RootStackParamList } from '@/types/navigation';

export const ProfileSettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const role = useAppStore((s) => s.role);

  return (
    <FeatureScaffold title="Profile & Settings" subtitle="Manage account and preferences">
      <GlassCard>
        <Text style={styles.title}>Ada Obi</Text>
        <Text style={styles.meta}>@adaobi | Developer | 2240 XP</Text>
        <GradientButton title="Edit Profile" />
      </GlassCard>

      <GlassCard><Text style={styles.meta}>My Courses</Text></GlassCard>
      <GlassCard><Text style={styles.meta}>My Certificates</Text></GlassCard>
      <GlassCard>
        <GradientButton
          title="Billing & Subscription"
          onPress={() => navigation.navigate('Subscription')}
        />
      </GlassCard>
      <GlassCard><Text style={styles.meta}>Notifications Settings</Text></GlassCard>
      <GlassCard><Text style={styles.meta}>Appearance</Text></GlassCard>
      <GlassCard><Text style={styles.meta}>Language & Region</Text></GlassCard>
      <GlassCard><Text style={styles.meta}>Privacy Settings</Text></GlassCard>
      <GlassCard><Text style={styles.meta}>Help & Support</Text></GlassCard>
      <GlassCard><Text style={styles.meta}>About HackCoder IT Services</Text></GlassCard>
      <GlassCard><Text style={styles.meta}>Terms & Privacy Policy</Text></GlassCard>

      {role === 'instructor' ? (
        <GradientButton
          title="Open Instructor Dashboard"
          fullWidth
          onPress={() => navigation.navigate('InstructorDashboard')}
        />
      ) : null}

      <GradientButton title="Logout" fullWidth />
    </FeatureScaffold>
  );
};

const styles = StyleSheet.create({
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 20 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 13 },
});
