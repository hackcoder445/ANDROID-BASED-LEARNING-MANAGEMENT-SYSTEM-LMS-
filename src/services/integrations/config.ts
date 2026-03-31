export const liveConfig = {
  agoraAppId: process.env.EXPO_PUBLIC_AGORA_APP_ID ?? '',
  streamApiKey: process.env.EXPO_PUBLIC_STREAM_API_KEY ?? '',
  stripePublishableKey: process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '',
  openAiApiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY ?? '',
  judge0Endpoint: process.env.EXPO_PUBLIC_JUDGE0_ENDPOINT ?? '',
};

export const hasRequiredLiveKeys = () => {
  return !!liveConfig.agoraAppId && !!liveConfig.streamApiKey;
};
