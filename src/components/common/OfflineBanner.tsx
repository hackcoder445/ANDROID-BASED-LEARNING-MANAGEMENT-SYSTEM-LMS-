import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Typography } from '@/constants/theme';

export const OfflineBanner = () => (
  <View style={styles.banner}>
    <Text style={styles.text}>Offline mode: showing cached content</Text>
  </View>
);

const styles = StyleSheet.create({
  banner: {
    backgroundColor: 'rgba(245, 158, 11, 0.18)',
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  text: {
    color: Colors.warning,
    fontFamily: Typography.bodyMedium,
    textAlign: 'center',
    fontSize: 12,
  },
});
