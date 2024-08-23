import { colors } from '@theme/colors';
import { typography } from '@theme/typography';
import StarIcon from '@ui/icons/star-icon';
import {
  horizontalScale,
  moderateScale,
  normalize,
  verticalScale,
} from '@utils/theme-utils';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type RepositoryCardProps = {
  name: string;
  description: string | null;
  noStars: number;
};

export const RepositoryCard = ({
  name,
  description,
  noStars,
}: RepositoryCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{name}</Text>
        <View style={styles.noStarsContainer}>
          <Text style={styles.noStarsText}>{noStars}</Text>
          <StarIcon />
        </View>
      </View>
      {description && (
        <View>
          <Text numberOfLines={5} style={styles.descriptionText}>
            {description}
          </Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palate.background,
    borderColor: colors.palate.stroke,
    borderRadius: moderateScale(8),
    borderWidth: 1,
    gap: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(10),
  },
  descriptionText: {
    color: colors.text.secondary,
    fontFamily: typography.primary.normal,
    fontSize: normalize(14),
    textAlignVertical: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  headerText: {
    color: colors.text.primary,
    flex: 1,
    fontFamily: typography.primary.bold,
    fontSize: normalize(16),
  },
  noStarsContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: horizontalScale(6),
  },
  noStarsText: {
    color: colors.text.primary,
    fontFamily: typography.primary.normal,
    fontSize: normalize(14),
    textAlignVertical: 'center',
  },
});
