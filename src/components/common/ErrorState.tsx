import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GradientButton } from './GradientButton';
import { Colors, Typography } from '@/constants/theme';

type Props = {
  message?: string;
  onRetry?: () => void;
};

export const ErrorState = ({ message = 'Something went wrong.', onRetry }: Props) => (
  <View style={styles.wrap}>
    <Text style={styles.icon}>!</Text>
    <Text style={styles.message}>{message}</Text>
    <GradientButton title="Retry" onPress={onRetry} />
  </View>
);

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', gap: 10, paddingVertical: 20 },
  icon: {
    color: Colors.danger,
    borderWidth: 1,
    borderColor: Colors.danger,
    borderRadius: 999,
    width: 34,
    height: 34,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  message: { color: Colors.textPrimary, fontFamily: Typography.body },
});
