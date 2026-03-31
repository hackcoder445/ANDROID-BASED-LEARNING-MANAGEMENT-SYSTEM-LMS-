import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

export const VideoPlayerScreen = () => {
  const [speed, setSpeed] = useState(1);

  return (
    <FeatureScaffold title="Video Player" subtitle="Overview, transcript, code editor, and Q&A">
      <View style={styles.playerWrap}>
        <Video source={{ uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }} style={styles.player} controls paused />
      </View>
      <GlassCard>
        <Text style={styles.title}>Playback Speed</Text>
        <Text style={styles.meta}>{speed}x</Text>
        <View style={styles.row}>
          {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
            <GradientButton key={s} title={`${s}x`} onPress={() => setSpeed(s)} />
          ))}
        </View>
      </GlassCard>
      <GlassCard><Text style={styles.title}>Tabs</Text><Text style={styles.meta}>Overview • Transcript • Code Editor • Q&A</Text></GlassCard>
      <GradientButton title="Next Lesson Auto-play (5s)" />
    </FeatureScaffold>
  );
};

const styles = StyleSheet.create({
  playerWrap: { borderRadius: 16, overflow: 'hidden', backgroundColor: '#000' },
  player: { width: '100%', aspectRatio: 16 / 9 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
