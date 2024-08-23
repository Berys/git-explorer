import { UserRepositories } from '@api/types/api-types';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@utils/theme-utils';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { RepositoryCard } from '../repository-card/repository-card';
import { Loader } from '@ui/loader';
import { Retry } from '@ui/retry/retry';
import { NoRepositoriesCard } from '../no-repositories-card/no-repositories-card';
import { timing } from '@theme/timing';

type RepositoryListProps = {
  repositoriesData: UserRepositories | undefined;
  isLoading: boolean;
  isError: boolean;
  retryFunction: () => void;
};

export const RepositoryList = ({
  repositoriesData,
  isLoading,
  isError,
  retryFunction,
}: RepositoryListProps) => {
  // TODO: Expand animation doesn't rest flatlist container height

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Retry retryFunction={retryFunction} />;
  }

  return (
    <View style={styles.contentContainerStyle}>
      {repositoriesData && repositoriesData.length > 0 ? (
        repositoriesData.map((repo, index) => (
          <Animated.View
            key={index}
            entering={ZoomIn.delay(
              timing.minimal + index * timing.minimal,
            ).duration(timing.quick)}
          >
            <RepositoryCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              noStars={repo.stargazers_count}
            />
          </Animated.View>
        ))
      ) : (
        <NoRepositoriesCard />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    marginVertical: verticalScale(16),
    marginHorizontal: horizontalScale(10),
    gap: verticalScale(16),
  },
});
