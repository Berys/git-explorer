import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import RedFolderIcon from '@ui/icons/red-folder-icon';
import { horizontalScale, normalize, verticalScale } from '@utils/theme-utils';
import { colors } from '@theme/colors';
import { typography } from '@theme/typography';

export const ResultsError = () => {
  return (
    <View style={styles.animationContainer}>
      <View>
        <RedFolderIcon />
        <LottieView
          autoPlay
          style={styles.lottieView}
          source={require('../lottie/error-disclaimer.json')}
        />
      </View>
      <Text style={styles.title}>Something went wrong!</Text>
      <Text style={styles.subtitle}>Please try again later</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(10),
  },
  lottieView: {
    height: horizontalScale(80),
    position: 'absolute',
    left: horizontalScale(80),
    bottom: horizontalScale(10),
    width: horizontalScale(80),
  },
  title: {
    color: colors.text.primary,
    fontFamily: typography.primary.bold,
    fontSize: normalize(16),
    lineHeight: normalize(18),
  },
  subtitle: {
    color: colors.text.secondary,
    fontFamily: typography.primary.normal,
    fontSize: normalize(16),
    lineHeight: normalize(18),
  },
});
