import React from 'react';
import { Text } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';

export const ThreadViewScreen = () => (
  <FeatureScaffold title="Thread View" subtitle="Replies and resolution workflow">
    <Text style={{ color: '#F0F2FF' }}>Thread messages with votes and @HackAI assistance.</Text>
  </FeatureScaffold>
);

export const DirectMessageScreen = () => (
  <FeatureScaffold title="Direct Message" subtitle="Instructor office hours and read receipts">
    <Text style={{ color: '#F0F2FF' }}>Single tick sent, double tick read indicators.</Text>
  </FeatureScaffold>
);
