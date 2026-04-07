import React, { useState } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { ResizeMode, Video } from 'expo-av';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GlassCard } from '@/components/common/GlassCard';
import { GradientButton } from '@/components/common/GradientButton';
import { Colors, Typography } from '@/constants/theme';

export const VideoPlayerScreen = () => {
  const [speed, setSpeed] = useState(1);

  return (
    <FeatureScaffold title="Video Lesson" subtitle="Overview, transcript, code editor, and Q&A">
      <View style={styles.playerWrap}>
        <Video
          source={{ uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
          style={styles.player}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay={false}
        />
      </View>
      <GlassCard>
        <View style={styles.row}><Ionicons name="speedometer" size={18} color={Colors.info} /><Text style={styles.title}>Playback Speed</Text></View>
        <Text style={styles.meta}>{speed}x</Text>
        <View style={styles.rowWrap}>
          {[0.5, 0.75, 1, 1.25, 1.5, 2].map((s) => (
            <GradientButton key={s} title={`${s}x`} onPress={() => setSpeed(s)} />
          ))}
        </View>
      </GlassCard>
      <GlassCard>
        <View style={styles.row}><MaterialCommunityIcons name="tab" size={18} color={Colors.secondary} /><Text style={styles.title}>Lesson Tabs</Text></View>
        <Text style={styles.meta}>Overview | Transcript | Code Editor | Q&A</Text>
      </GlassCard>
      <GradientButton title="Next Lesson Auto-play (5s)" />
    </FeatureScaffold>
  );
};

const styles = StyleSheet.create({
  playerWrap: { borderRadius: 16, overflow: 'hidden', backgroundColor: '#000' },
  player: { width: '100%', aspectRatio: 16 / 9 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  rowWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  title: { color: Colors.textPrimary, fontFamily: Typography.heading, fontSize: 16 },
  meta: { color: Colors.textMuted, fontFamily: Typography.body, fontSize: 12 },
});
