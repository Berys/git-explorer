import { GitHubUserItem } from '@api/types/api-types';
import { FlatList, StyleSheet, Text } from 'react-native';

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
      renderItem={({ item }) => <Text>{item.login}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 32,
    paddingHorizontal: 24,
  },
  flatList: {
    flex: 1,
  },
});
