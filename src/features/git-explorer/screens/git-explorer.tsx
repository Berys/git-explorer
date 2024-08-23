import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { AppStackParamList } from '@navigators/root-navigation';

type GitExplorerProps = NativeStackScreenProps<
  AppStackParamList,
  'GitExplorer'
>;

export const GitExplorer = ({}: GitExplorerProps) => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 32,
    backgroundColor: 'red',
  },
});
