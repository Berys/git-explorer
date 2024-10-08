import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { typography } from '@theme/typography';
import { colors } from '@theme/colors';
import { normalize, verticalScale } from '@utils/theme-utils';

type RetryPros = {
  retryFunction?: () => void;
};

export const Retry = ({}: RetryPros) => {
  // TODO: Add retry function
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        style={styles.lottieView}
        source={require('../lottie/error-disclaimer.json')}
      />
      <Text style={styles.text}>Something went wrong!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: 'center',
    gap: verticalScale(8),
    justifyContent: 'center',
    marginVertical: verticalScale(10),
  },
  lottieView: {
    height: verticalScale(50),
    width: verticalScale(50),
  },
  text: {
    color: colors.text.secondary,
    fontFamily: typography.primary.normal,
    fontSize: normalize(16),
    lineHeight: normalize(18),
  },
});
