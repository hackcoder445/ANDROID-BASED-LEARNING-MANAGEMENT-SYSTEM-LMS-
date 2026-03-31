import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

export const CertificateScreen = () => (
  <FeatureScaffold title="Certificate of Completion" subtitle="HackCoder IT Services">
    <GlassCard>
      <Text style={styles.h1}>Certificate of Completion</Text>
      <Text style={styles.student}>Ada Obi</Text>
      <Text style={styles.meta}>has successfully completed</Text>
      <Text style={styles.course}>React Native for Production Apps</Text>
      <Text style={styles.meta}>Credential ID: HCA-2026-03-31-8FA3</Text>
      <Text style={styles.meta}>Completion Date: March 31, 2026</Text>
    </GlassCard>
    <GradientButton title="Download PNG" fullWidth />
    <GradientButton title="Download PDF" fullWidth />
    <GradientButton title="Share to LinkedIn" fullWidth />
    <GradientButton title="Copy Credential ID" fullWidth />
  </FeatureScaffold>
);

const styles = StyleSheet.create({
  h1: { color: '#FFD166', fontFamily: Typography.heading, fontSize: 28, textAlign: 'center' },
  student: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 36, textAlign: 'center' },
  course: { color: Colors.primary, fontFamily: Typography.heading, fontSize: 22, textAlign: 'center' },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, textAlign: 'center' },
});
