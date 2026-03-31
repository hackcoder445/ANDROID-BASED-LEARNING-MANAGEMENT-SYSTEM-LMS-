import React from 'react';
import { Text } from 'react-native';

import { FeatureScaffold } from '@/components/common/FeatureScaffold';

export const AnalyticsScreen = () => (
  <FeatureScaffold title="Course Analytics" subtitle="Enrollment trends and drop-off heatmaps">
    <Text style={{ color: '#F0F2FF' }}>Charts for completion distribution and quiz performance.</Text>
  </FeatureScaffold>
);

export const CourseBuilderScreen = () => (
  <FeatureScaffold title="Course Builder" subtitle="Multi-step course creation flow">
    <Text style={{ color: '#F0F2FF' }}>Steps: Basic Info, Curriculum, Resources, Settings, Preview, Submit.</Text>
  </FeatureScaffold>
);
