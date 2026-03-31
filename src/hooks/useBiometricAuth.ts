import * as LocalAuthentication from 'expo-local-authentication';

export const useBiometricAuth = () => {
  const authenticate = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) return false;
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Sign in to HackCoder Academy',
      fallbackLabel: 'Use passcode',
    });
    return result.success;
  };

  return { authenticate };
};
