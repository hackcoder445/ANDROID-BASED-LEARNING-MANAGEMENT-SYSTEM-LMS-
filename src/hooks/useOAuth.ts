import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

export const useOAuth = () => {
  const redirectUri = AuthSession.makeRedirectUri({ scheme: 'hackcoder' });

  const signInWithGoogle = async () => {
    return WebBrowser.openAuthSessionAsync(
      `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${encodeURIComponent(redirectUri)}`,
      redirectUri
    );
  };

  const signInWithGithub = async () => {
    return WebBrowser.openAuthSessionAsync(
      `https://github.com/login/oauth/authorize?redirect_uri=${encodeURIComponent(redirectUri)}`,
      redirectUri
    );
  };

  return { signInWithGoogle, signInWithGithub };
};
