import { LinkingOptions } from '@react-navigation/native';

import { RootStackParamList } from '@/types/navigation';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['hackcoder://'],
  config: {
    screens: {
      Splash: 'splash',
      Onboarding: 'onboarding',
      SkillAssessment: 'assessment',
      Auth: 'auth',
      Main: 'app',
      CourseDetail: 'course/:courseId',
      VideoPlayer: 'course/:courseId/video/:lessonId',
      Quiz: 'quiz/:quizId',
      Certificate: 'certificate/:certificateId',
      LiveLobby: 'live/:sessionId/lobby',
      LiveRoom: 'live/:sessionId/room',
      BreakoutRoom: 'live/breakout/:roomId',
      ThreadView: 'chat/:channelId/thread/:messageId',
      DirectMessage: 'dm/:userId',
      InstructorDashboard: 'instructor',
      CourseBuilder: 'instructor/builder',
      Analytics: 'instructor/analytics/:courseId',
      Subscription: 'billing',
      NotificationCenter: 'notifications',
    },
  },
};
