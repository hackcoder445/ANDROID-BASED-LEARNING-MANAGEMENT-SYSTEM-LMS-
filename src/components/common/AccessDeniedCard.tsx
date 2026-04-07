import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { GlassCard } from './GlassCard';
import { Colors, Typography } from '@/constants/theme';

export const AccessDeniedCard = ({ message = 'Only admin accounts can access this area.' }: { message?: string }) => {
  return (
    <GlassCard>
      <View style={styles.row}>
        <Ionicons name="lock-closed" size={18} color={Colors.danger} />
        <Text style={styles.title}>Access Restricted</Text>
      </View>
      <Text style={styles.text}>{message}</Text>
    </GlassCard>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 6 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  text: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
