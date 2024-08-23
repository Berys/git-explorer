import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { AppStackParamList } from '@navigators/root-navigation';
import { horizontalScale, normalize, verticalScale } from '@utils/theme-utils';
import { colors } from '@theme/colors';
import { typography } from '@theme/typography';
import { SearchBar } from '@ui/searchbar';

type GitExplorerProps = NativeStackScreenProps<
  AppStackParamList,
  'GitExplorer'
>;

export const GitExplorer = ({}: GitExplorerProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
        <SearchBar onSearch={() => {}} />
        <Text style={styles.subtitle}>
          {searchQuery
            ? `Search results for "${searchQuery}"`
            : 'Who are you looking for?'}
        </Text>
      </View>
      <View style={styles.spacer} />
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
  },
  title: {
    fontFamily: typography.primary.bold,
    fontSize: normalize(32),
  },
  spacer: {
    borderBottomWidth: 2,
    marginVertical: verticalScale(20),
    borderColor: colors.palate.primary,
  },
});
