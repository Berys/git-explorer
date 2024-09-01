import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import BlueFolderIcon from '@ui/icons/blue-folder-icon';
import { horizontalScale, normalize, verticalScale } from '@utils/theme-utils';
import { colors } from '@theme/colors';
import { typography } from '@theme/typography';

export const ResultsLoader = () => {
  // TODO: Fix static + asset position
  return (
    <View style={styles.animationContainer}>
      <View>
        <BlueFolderIcon />
        <LottieView
          autoPlay
          style={styles.lottieView}
          source={require('../lottie/loading-search.json')}
        />
      </View>
      <Text style={styles.title}>Searching...</Text>
      <Text style={styles.subtitle}>It will take a second</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: 'center',
    flexGrow: 1,
    gap: verticalScale(10),
    justifyContent: 'center',
  },
  lottieView: {
    bottom: horizontalScale(-15),
    height: horizontalScale(150),
    left: horizontalScale(30),
    position: 'absolute',
    width: horizontalScale(150),
  },
  subtitle: {
    color: colors.text.secondary,
    fontFamily: typography.primary.normal,
    fontSize: normalize(16),
    lineHeight: normalize(18),
  },
  title: {
    color: colors.text.primary,
    fontFamily: typography.primary.bold,
    fontSize: normalize(16),
    lineHeight: normalize(18),
  },
});
