export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  SkillAssessment: undefined;
  Auth: undefined;
  Main: undefined;
  CourseDetail: { courseId: string };
  VideoPlayer: { courseId: string; lessonId: string };
  Quiz: { quizId: string };
  Certificate: { certificateId: string };
  LiveLobby: { sessionId: string };
  LiveRoom: { sessionId: string };
  BreakoutRoom: { roomId: string };
  ThreadView: { channelId: string; messageId: string };
  DirectMessage: { userId: string };
  InstructorDashboard: undefined;
  CourseBuilder: undefined;
  Analytics: { courseId: string };
  Subscription: undefined;
  NotificationCenter: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Courses: undefined;
  Live: undefined;
  MyLearning: undefined;
  Profile: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  MagicLinkVerification: undefined;
};
