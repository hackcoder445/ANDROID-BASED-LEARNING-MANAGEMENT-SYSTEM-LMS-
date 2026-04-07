import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';
import { useAppStore } from '@/state/appStore';
import { useAuthStore } from '@/state/authStore';
import { RootStackParamList } from '@/types/navigation';

const settings = [
  { icon: 'book-outline', label: 'My Courses' },
  { icon: 'ribbon-outline', label: 'My Certificates' },
  { icon: 'notifications-outline', label: 'Notifications Settings' },
  { icon: 'contrast-outline', label: 'Appearance' },
  { icon: 'language-outline', label: 'Language & Region' },
  { icon: 'shield-checkmark-outline', label: 'Privacy Settings' },
  { icon: 'help-circle-outline', label: 'Help & Support' },
  { icon: 'information-circle-outline', label: 'About HackCoder IT Services' },
  { icon: 'document-text-outline', label: 'Terms & Privacy Policy' },
];

export const ProfileSettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const role = useAppStore((s) => s.role);
  const authRole = useAuthStore((s) => s.user?.role);

  return (
    <FeatureScaffold title="Profile" subtitle="Account and app settings">
      <GlassCard>
        <View style={styles.profileTop}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={24} color={Colors.textPrimary} />
          </View>
          <View>
            <Text style={styles.title}>Ada Obi</Text>
            <Text style={styles.meta}>@adaobi | Developer | 2240 XP</Text>
          </View>
        </View>
        <GradientButton title="Edit Profile" />
      </GlassCard>

      <GlassCard>
        <GradientButton title="Billing & Subscription" onPress={() => navigation.navigate('Subscription')} />
      </GlassCard>

      {settings.map((item) => (
        <GlassCard key={item.label}>
          <View style={styles.row}>
            <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={18} color={Colors.info} />
            <Text style={styles.meta}>{item.label}</Text>
          </View>
        </GlassCard>
      ))}

      {role === 'admin' || authRole === 'admin' ? (
        <GradientButton
          title="Open Admin Console"
          fullWidth
          onPress={() => navigation.navigate('InstructorDashboard')}
        />
      ) : null}

      <GradientButton title="Logout" fullWidth />
    </FeatureScaffold>
  );
};

const styles = StyleSheet.create({
  profileTop: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 999,
    backgroundColor: 'rgba(91,110,245,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 20 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 13 },
});
