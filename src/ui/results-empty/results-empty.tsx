import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import GrayFolderIcon from '@ui/icons/gray-folder-icon';
import { horizontalScale, normalize, verticalScale } from '@utils/theme-utils';
import { colors } from '@theme/colors';
import { typography } from '@theme/typography';

export const ResultsEmpty = () => {
  return (
    <View style={styles.animationContainer}>
      <View>
        <GrayFolderIcon />
        <LottieView
          autoPlay
          style={styles.lottieView}
          source={require('../lottie/error-cross.json')}
        />
      </View>
      <Text style={styles.title}>No matching results!</Text>
      <Text style={styles.subtitle}>We couldn't find any user</Text>
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
    height: horizontalScale(50),
    position: 'absolute',
    left: horizontalScale(80),
    bottom: horizontalScale(25),
    width: horizontalScale(50),
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
