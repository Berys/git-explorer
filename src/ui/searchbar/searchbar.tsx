import React, { useState, useCallback } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { colors } from '@theme/colors';
import { typography } from '@theme/typography';
import SearchIcon from '@ui/icons/search-icon';
import {
  horizontalScale,
  moderateScale,
  normalize,
  verticalScale,
} from '@utils/theme-utils';
import debounce from 'lodash/debounce';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = React.memo(({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const debouncedSearch = useCallback(
    debounce((query) => {
      onSearch(query);
    }, 500),
    [],
  );

  const handleChangeText = (text: string) => {
    setSearchText(text);
    debouncedSearch(text);
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      debouncedSearch.cancel();
      onSearch(searchText.trim());
    }
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        placeholderTextColor={colors.text.secondary}
        value={searchText}
        onChangeText={handleChangeText}
        keyboardType="default"
        returnKeyType="search"
        placeholder="e.g. facebook"
        autoCorrect={false}
        autoCapitalize="none"
        clearButtonMode="while-editing"
        autoFocus={false}
        accessible={true}
        importantForAccessibility="yes"
        accessibilityLabel="Search for GitHub users..."
        accessibilityHint="Enter a keyword to search the list"
        onSubmitEditing={handleSearch}
      />
      <Pressable
        style={({ pressed }) => [
          styles.searchButton,
          pressed && { opacity: 0.5 },
        ]}
        onPress={handleSearch}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Search button"
        accessibilityHint="Press to search based on the entered keyword"
      >
        <SearchIcon scaleX={1} scaleY={1} />
      </Pressable>
    </View>
  );
});

SearchBar.displayName = 'NoRepositoriesCard';

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
  },
  searchButton: {
    alignItems: 'center',
    backgroundColor: colors.palate.primary,
    borderBottomRightRadius: moderateScale(8),
    borderTopRightRadius: moderateScale(8),
    height: verticalScale(46),
    justifyContent: 'center',
    width: verticalScale(46),
  },
  searchInput: {
    backgroundColor: colors.palate.secondary,
    borderBottomLeftRadius: moderateScale(8),
    borderTopLeftRadius: moderateScale(8),
    flex: 1,
    fontFamily: typography.primary.normal,
    fontSize: normalize(16),
    height: verticalScale(46),
    paddingLeft: horizontalScale(16),
    paddingVertical: verticalScale(12),
  },
});

export default SearchBar;
