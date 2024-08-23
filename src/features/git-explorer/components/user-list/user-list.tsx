import { GitHubUserItem } from '@api/types/api-types';
import { horizontalScale, verticalScale } from '@utils/theme-utils';
import { FlatList, StyleSheet, Text } from 'react-native';
import UserCard from '../user-card/user-card';

type UserListProps = {
  usersData: GitHubUserItem[] | undefined;
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
