import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';
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

type NoRepositoriesCardProps = {
  message?: string;
  testID?: string;
};

const NoRepositoriesCard: React.FC<NoRepositoriesCardProps> = memo(
  ({ message = 'This user has no repositories', testID }) => {
    return (
      <Animated.View
        entering={ZoomIn.delay(timing.minimal).duration(timing.quick)}
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text testID={testID} style={styles.descriptionText}>
              {message}
            </Text>
            <SadFaceIcon
              scaleX={moderateScale(1.2)}
              scaleY={moderateScale(1.2)}
            />
          </View>
        </View>
      </Animated.View>
    );
  },
);

NoRepositoriesCard.displayName = 'NoRepositoriesCard';

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

export default NoRepositoriesCard;
