import { colors } from '@theme/colors';
import { timing } from '@theme/timing';
import { typography } from '@theme/typography';
import SadFaceIcon from '@ui/icons/sad-face-icon';
import {
  horizontalScale,
  moderateScale,
  normalize,
  verticalScale,
} from '@utils/theme-utils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';

export const NoRepositoriesCard = () => {
  // TODO: Fix icon scaling
  return (
    <Animated.View
      entering={ZoomIn.delay(timing.minimal).duration(timing.quick)}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.descriptionText}>
            {'This user has no repositories'}
          </Text>
          <SadFaceIcon
            scaleX={moderateScale(1.2)}
            scaleY={moderateScale(1.2)}
          />
        </View>
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palate.background,
    borderColor: colors.palate.stroke,
    borderRadius: moderateScale(8),
    borderWidth: 1,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(10),
  },
  descriptionText: {
    color: colors.text.decoration,
    fontFamily: typography.primary.normal,
    fontSize: normalize(14),
    textAlignVertical: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
