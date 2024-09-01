import React from 'react';
import { UserRepositories } from '@api/types/api-types';
import { horizontalScale, verticalScale } from '@utils/theme-utils';
import { StyleSheet, FlatList, ListRenderItem } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { timing } from '@theme/timing';
import NoRepositoriesCard from '../no-repositories-card/no-repositories-card';
import RepositoryCard from '../repository-card/repository-card';

type RepositoryListProps = {
  repositoriesData: UserRepositories;
  loadMore?: () => void;
};

export const RepositoryList: React.FC<RepositoryListProps> = ({
  repositoriesData,
  loadMore,
}) => {
  const renderItem: ListRenderItem<UserRepositories[number]> = ({
    item,
    index,
  }) => (
    <Animated.View
      key={item.id}
      entering={ZoomIn.delay(timing.minimal + index * timing.minimal).duration(
        timing.quick,
      )}
    >
      <RepositoryCard repository={item} />
    </Animated.View>
  );

  //  TODO: Add pagination

  return (
    <FlatList
      data={repositoriesData}
      style={styles.flatList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.contentContainerStyle}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={<NoRepositoriesCard />}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
  flatList: {
    gap: verticalScale(16),
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(16),
  },
});
