import React from 'react';
import { Text } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';
import { GradientButton } from '@/components/common/GradientButton';

export const LiveLobbyScreen = () => (
  <FeatureScaffold title="Pre-Class Lobby" subtitle="Agenda, countdown, and device checks">
    <Text style={{ color: '#F0F2FF' }}>You're in the right place. Session starts in 00:12:34.</Text>
    <GradientButton title="Enter Live Room" />
  </FeatureScaffold>
);

export const BreakoutRoomScreen = () => (
  <FeatureScaffold title="Breakout Room" subtitle="Private video + chat with countdown timer">
    <Text style={{ color: '#F0F2FF' }}>5 minutes left notification enabled.</Text>
  </FeatureScaffold>
);
