import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { typography } from '@theme/typography';
import { colors } from '@theme/colors';
import { normalize, verticalScale } from '@utils/theme-utils';

type RetryPros = {
  retryFunction: () => void;
};

export const Retry = ({ retryFunction }: RetryPros) => {
  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        style={styles.lottieView}
        source={require('../lottie/error-disclaimer.json')}
      />
      <Text style={styles.text}>Something went wrong!</Text>
      <Pressable
        style={({ pressed }) => [pressed && { opacity: 0.5 }]}
        onPress={retryFunction}
      >
        <Text style={styles.buttonText}>Retry</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(10),
    gap: verticalScale(8),
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
  button: {
    color: colors.palate.primary,
  },
  buttonText: {
    color: colors.palate.primary,
    fontFamily: typography.primary.normal,
    fontSize: normalize(16),
    lineHeight: normalize(18),
  },
});
