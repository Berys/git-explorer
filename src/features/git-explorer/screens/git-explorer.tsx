import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@navigators/root-navigation';
import { useQuery } from '@tanstack/react-query';
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
import { UserList } from '../components/user-list/user-list';
import { ResultsError } from '@ui/results-error/results-error';
import { ResultsLoader } from '@ui/results-loader/results-loader';

type GitExplorerProps = NativeStackScreenProps<
  AppStackParamList,
  'GitExplorer'
>;

export const GitExplorer: React.FC<GitExplorerProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const { data, isError, isLoading } = useQuery({
    queryKey: ['githubUser', searchQuery],
    queryFn: () => searchGitHubUsers(searchQuery),
    enabled: !!searchQuery,
  });

  const renderContent = useMemo(() => {
    if (isLoading) {
      return <ResultsLoader />;
    }

    if (isError) {
      return <ResultsError />;
    }

    return data ? <UserList usersData={data.items} /> : null;
  }, [isLoading, isError, data]);

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
      {renderContent}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palate.background,
    flexGrow: 1,
    paddingTop: verticalScale(32),
  },
  header: {
    gap: verticalScale(20),
    paddingHorizontal: horizontalScale(24),
  },
  spacer: {
    borderBottomWidth: moderateScale(2),
    borderColor: colors.palate.primary,
    marginTop: verticalScale(20),
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
});
