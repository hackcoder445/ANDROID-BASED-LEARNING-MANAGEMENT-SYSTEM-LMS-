import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { Colors, Typography } from '@/constants/theme';

type Props = {
  progress: number;
  valueText: string;
  subtitle: string;
  size?: number;
};

export const ProgressRing = ({ progress, valueText, subtitle, size = 230 }: Props) => {
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - Math.min(Math.max(progress, 0), 1) * circumference;

  return (
    <View style={[styles.wrap, { width: size, height: size }]}>
      <Svg width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={Colors.border}
          strokeWidth={stroke}
          fill="transparent"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={Colors.success}
          strokeWidth={stroke}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          rotation={-90}
          originX={size / 2}
          originY={size / 2}
        />
      </Svg>
      <View style={styles.center}>
        <Text style={styles.value}>{valueText}</Text>
        <Text style={styles.sub}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { alignSelf: 'center', justifyContent: 'center', alignItems: 'center' },
  center: { position: 'absolute', alignItems: 'center', gap: 6 },
  value: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 24 },
  sub: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
