import React from 'react';
import { GitHubUserItem } from '@api/types/api-types';
import { horizontalScale, verticalScale } from '@utils/theme-utils';
import { FlatList, StyleSheet } from 'react-native';
import UserCard from '../user-card/user-card';
import { ResultsEmpty } from '@ui/results-empty/results-empty';

type UserListProps = {
  usersData: GitHubUserItem[];
};

export const UserList = ({ usersData }: UserListProps) => {
  return (
    <FlatList
      keyExtractor={(user) => user.id.toString()}
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      data={usersData}
      renderItem={({ item }) => <UserCard name={item.login} />}
      ListEmptyComponent={<ResultsEmpty />}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: verticalScale(32),
    paddingHorizontal: horizontalScale(24),
  },
  flatList: {
    flex: 1,
  },
});
