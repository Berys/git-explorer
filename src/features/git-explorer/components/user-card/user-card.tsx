import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
  useDerivedValue,
  interpolate,
  ZoomIn,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@theme/colors';
import { typography } from '@theme/typography';
import { searchGitHubUserRepos } from '@api/client';
import { useQuery } from '@tanstack/react-query';
import { moderateScale, normalize, verticalScale } from '@utils/theme-utils';
import { RepositoryList } from '../repository-list/repository-list';

const AnimatedIonicons = Animated.createAnimatedComponent(Ionicons);

type UserCardProps = {
  name: string;
};

const UserCard = ({ name }: UserCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const progress = useSharedValue(0);

  const animatedHeightValue = useSharedValue(0);
  const bodyHeight = useSharedValue(0);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    progress.value = withTiming(isExpanded ? 0 : 1, { duration: 300 });
    animatedHeightValue.value = withTiming(isExpanded ? 0 : 1, {
      duration: 0,
    });
  };

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

  const { data, isLoading, isError } = useQuery({
    queryKey: ['githubUserRepos', name],
    queryFn: () => searchGitHubUserRepos(name),
    enabled: isExpanded,
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleExpand}>
        <Animated.View style={[styles.header, animatedHeaderStyle]}>
          <Animated.Text style={[styles.headerText, animatedTextStyle]}>
            {name}
          </Animated.Text>
          <AnimatedIonicons
            name="chevron-down"
            size={verticalScale(24)}
            style={animatedChevronStyle}
          />
        </Animated.View>
      </Pressable>
      <Animated.View style={[styles.contentContainer, animatedStyle]}>
        <View
          onLayout={(event) => {
            bodyHeight.value = event.nativeEvent.layout.height;
          }}
        >
          <View style={{ flexGrow: 1 }}>
            <RepositoryList
              repositoriesData={data}
              isLoading={isLoading}
              isError={isError}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(8),
    marginVertical: verticalScale(10),
    overflow: 'hidden',
  },
  contentContainer: {
    backgroundColor: colors.palate.secondary,
    overflow: 'hidden',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(16),
  },
  headerText: {
    fontFamily: typography.primary.normal,
    fontSize: normalize(16),
    lineHeight: normalize(18),
    textAlignVertical: 'center',
  },
});

export default UserCard;
