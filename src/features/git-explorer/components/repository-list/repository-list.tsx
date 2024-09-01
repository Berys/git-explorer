import React from 'react';
import { UserRepositories } from '@api/types/api-types';
import { horizontalScale, verticalScale } from '@utils/theme-utils';
import { StyleSheet, View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { RepositoryCard } from '../repository-card/repository-card';
import { timing } from '@theme/timing';
import NoRepositoriesCard from '../no-repositories-card/no-repositories-card';

type RepositoryListProps = {
  repositoriesData: UserRepositories;
};

export const RepositoryList = ({ repositoriesData }: RepositoryListProps) => {
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
    gap: verticalScale(16),
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(16),
  },
});
