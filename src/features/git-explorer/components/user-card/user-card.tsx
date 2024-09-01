import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { withTiming } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@theme/colors';
import { typography } from '@theme/typography';
import { searchGitHubUserRepos } from '@api/client';
import { useQuery } from '@tanstack/react-query';
import { moderateScale, normalize, verticalScale } from '@utils/theme-utils';
import { RepositoryList } from '../repository-list/repository-list';
import { Retry } from '@ui/retry';
import { Loader } from '@ui/loader';
import useUserCardAnimations from '@theme/animation-hooks/use-user-card-animation';

const AnimatedIonicons = Animated.createAnimatedComponent(Ionicons);

type UserCardProps = {
  name: string;
};

const UserCard: React.FC<UserCardProps> = ({ name }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    animatedStyle,
    animatedHeaderStyle,
    animatedChevronStyle,
    animatedTextStyle,
    progress,
    animatedHeightValue,
    bodyHeight,
  } = useUserCardAnimations(isExpanded);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    progress.value = withTiming(isExpanded ? 0 : 1, { duration: 300 });
    animatedHeightValue.value = withTiming(isExpanded ? 0 : 1, {
      duration: 0,
    });
  };

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
          <View style={styles.repositoriesWrapper}>
            {isLoading && <Loader />}
            {isError && <Retry />}
            {!isLoading && !isError && (
              <RepositoryList repositoriesData={data || []} />
            )}
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
  repositoriesWrapper: {
    flexGrow: 1,
  },
});

export default UserCard;
