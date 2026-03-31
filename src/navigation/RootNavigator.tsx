import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthNavigator } from '@/navigation/AuthNavigator';
import { MainTabs } from '@/navigation/MainTabs';
import { SplashScreen } from '@/screens/splash/SplashScreen';
import { OnboardingScreen } from '@/screens/onboarding/OnboardingScreen';
import { SkillAssessmentScreen } from '@/screens/onboarding/SkillAssessmentScreen';
import { CourseDetailScreen } from '@/screens/courses/CourseDetailScreen';
import { VideoPlayerScreen } from '@/screens/courses/VideoPlayerScreen';
import { QuizAssessmentScreen } from '@/screens/quizzes/QuizAssessmentScreen';
import { CertificateScreen } from '@/screens/certificate/CertificateScreen';
import { LiveLobbyScreen, BreakoutRoomScreen } from '@/screens/live/LiveAuxScreens';
import { LiveRoomScreen } from '@/screens/live/LiveRoomScreen';
import { ThreadViewScreen, DirectMessageScreen } from '@/screens/chat/ChatAuxScreens';
import { InstructorDashboardScreen } from '@/screens/instructor/InstructorDashboardScreen';
import { CourseBuilderScreen, AnalyticsScreen } from '@/screens/instructor/InstructorAuxScreens';
import { SubscriptionScreen } from '@/screens/profile/SubscriptionScreen';
import { NotificationCenterScreen } from '@/screens/profile/NotificationCenterScreen';
import { RootStackParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="SkillAssessment" component={SkillAssessmentScreen} />
    <Stack.Screen name="Auth" component={AuthNavigator} />
    <Stack.Screen name="Main" component={MainTabs} />

    <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
    <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
    <Stack.Screen name="Quiz" component={QuizAssessmentScreen} />
    <Stack.Screen name="Certificate" component={CertificateScreen} />

    <Stack.Screen name="LiveLobby" component={LiveLobbyScreen} />
    <Stack.Screen name="LiveRoom" component={LiveRoomScreen} />
    <Stack.Screen name="BreakoutRoom" component={BreakoutRoomScreen} />

    <Stack.Screen name="ThreadView" component={ThreadViewScreen} />
    <Stack.Screen name="DirectMessage" component={DirectMessageScreen} />

    <Stack.Screen name="InstructorDashboard" component={InstructorDashboardScreen} />
    <Stack.Screen name="CourseBuilder" component={CourseBuilderScreen} />
    <Stack.Screen name="Analytics" component={AnalyticsScreen} />
    <Stack.Screen name="Subscription" component={SubscriptionScreen} />
    <Stack.Screen name="NotificationCenter" component={NotificationCenterScreen} />
  </Stack.Navigator>
);
