import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { AppStackParamList } from '@navigators/root-navigation';
import {
  horizontalScale,
  moderateScale,
  normalize,
  verticalScale,
} from '@utils/theme-utils';
import { colors } from '@theme/colors';
import { typography } from '@theme/typography';
import { SearchBar } from '@ui/searchbar';
import { searchGitHubUsers } from '@api/client';
import { useQuery } from '@tanstack/react-query';
import { UserList } from '../components/user-list/user-list';

type GitExplorerProps = NativeStackScreenProps<
  AppStackParamList,
  'GitExplorer'
>;

export const GitExplorer = ({}: GitExplorerProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { data, isError, isLoading } = useQuery({
    queryKey: ['githubUser', searchQuery],
    queryFn: () => searchGitHubUsers(searchQuery),
    enabled: !!searchQuery,
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
        <SearchBar onSearch={handleSearch} />
        <Text style={styles.subtitle}>
          {searchQuery
            ? `Search results for "${searchQuery}"`
            : 'Who are you looking for?'}
        </Text>
      </View>
      <View style={styles.spacer} />
      {searchQuery && (
        <UserList
          usersData={data?.items}
          isLoading={isLoading}
          isError={isError}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: verticalScale(32),
    backgroundColor: colors.palate.background,
  },
  header: {
    paddingHorizontal: horizontalScale(24),
    gap: verticalScale(20),
  },
  subtitle: {
    fontFamily: typography.primary.normal,
    fontSize: normalize(14),
    lineHeight: normalize(16),
  },
  title: {
    fontFamily: typography.primary.bold,
    fontSize: normalize(32),
  },
  spacer: {
    borderBottomWidth: moderateScale(2),
    marginTop: verticalScale(20),
    borderColor: colors.palate.primary,
  },
});
