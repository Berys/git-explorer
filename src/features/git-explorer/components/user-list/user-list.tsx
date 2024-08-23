import { GitHubUserItem } from '@api/types/api-types';
import { horizontalScale, verticalScale } from '@utils/theme-utils';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import UserCard from '../user-card/user-card';
import { ResultsLoader } from '@ui/results-loader/results-loader';
import { ResultsEmpty } from '@ui/results-empty/results-empty';
import { ResultsError } from '@ui/results-error/results-error';

type UserListProps = {
  usersData: GitHubUserItem[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

export const UserList = ({ usersData, isLoading, isError }: UserListProps) => {
  if (isError) {
    return (
      <View style={styles.contentContainerStyle}>
        <ResultsError />
      </View>
    );
  }
  return (
    <FlatList
      keyExtractor={(user) => user.id.toString()}
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      data={usersData}
      renderItem={({ item }) => <UserCard name={item.login} />}
      ListEmptyComponent={isLoading ? <ResultsLoader /> : <ResultsEmpty />}
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
