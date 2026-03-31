import * as Haptics from 'expo-haptics';

export const triggerHaptic = async (
  type: 'light' | 'medium' | 'heavy' = 'light'
) => {
  const map = {
    light: Haptics.ImpactFeedbackStyle.Light,
    medium: Haptics.ImpactFeedbackStyle.Medium,
    heavy: Haptics.ImpactFeedbackStyle.Heavy,
  };
  await Haptics.impactAsync(map[type]);
};
