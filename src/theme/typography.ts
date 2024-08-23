import { Platform } from 'react-native';
import {
  Lato_100Thin as LatoLight,
  Lato_400Regular as LatoRegular,
  Lato_900Black as LatoBold,
} from '@expo-google-fonts/lato';

export const customFontsToLoad = {
  LatoLight,
  LatoRegular,
  LatoBold,
};

const fonts = {
  lato: {
    light: 'LatoLight',
    normal: 'LatoRegular',
    bold: 'LatoBold',
  },
};

export const typography = {
  fonts,
  primary: fonts.lato,
  secondary: Platform.select({
    ios: fonts.lato,
    android: fonts.lato,
  }),
  code: Platform.select({ ios: fonts.lato, android: fonts.lato }),
};
