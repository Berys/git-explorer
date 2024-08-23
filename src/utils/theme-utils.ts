import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 393;
const guidelineBaseHeight = 852;

const widthRatio = width / guidelineBaseWidth;
const heightRatio = height / guidelineBaseHeight;

export const horizontalScale = (size: number) => widthRatio * size;

export const verticalScale = (size: number) => heightRatio * size;

export const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export const normalize = (size: number, forHeight?: boolean) => {
  const newSize = size * (forHeight ? heightRatio : widthRatio);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
