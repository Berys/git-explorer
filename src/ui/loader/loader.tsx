import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { verticalScale } from '@utils/theme-utils';

export const Loader = () => {
  return (
    <LottieView
      autoPlay
      style={styles.lottieView}
      source={require('../lottie/loader-dots.json')}
    />
  );
};

const styles = StyleSheet.create({
  lottieView: {
    alignItems: 'center',
    height: verticalScale(64),
    justifyContent: 'center',
  },
});
