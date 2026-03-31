import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Typography } from '@/constants/theme';

type Props = {
  title: string;
  rightText?: string;
};

export const SectionHeader = ({ title, rightText }: Props) => (
  <View style={styles.row}>
    <Text style={styles.title}>{title}</Text>
    {rightText ? <Text style={styles.right}>{rightText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 18 },
  right: { color: Colors.primary, fontFamily: Typography.bodyMedium, fontSize: 13 },
});
