import { colors } from '@theme/colors';
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const useUserCardAnimations = (isExpanded: boolean) => {
  const progress = useSharedValue(0);
  const animatedHeightValue = useSharedValue(0);
  const bodyHeight = useSharedValue(0);

  const heightProgress = useDerivedValue(() =>
    isExpanded
      ? withTiming(1, { duration: 200 })
      : withTiming(0, { duration: 200 }),
  );

  const animatedStyle = useAnimatedStyle(() => {
    const height = interpolate(
      animatedHeightValue.value,
      [0, 1],
      [0, bodyHeight.value * heightProgress.value + 3],
    );

    return {
      height,
    };
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.palate.secondary, colors.palate.primary],
    );
    return {
      backgroundColor,
    };
  });

  const animatedChevronStyle = useAnimatedStyle(() => {
    const rotate = `${progress.value * 180}deg`;
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [colors.text.primary, colors.text.white],
    );
    return {
      transform: [{ rotate }],
      color,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [colors.text.primary, colors.text.white],
    );
    return {
      color,
    };
  });

  return {
    animatedStyle,
    animatedHeaderStyle,
    animatedChevronStyle,
    animatedTextStyle,
    progress,
    animatedHeightValue,
    bodyHeight,
  };
};

export default useUserCardAnimations;
