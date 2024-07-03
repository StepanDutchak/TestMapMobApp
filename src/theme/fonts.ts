import {StyleSheet} from 'react-native';
import variables from './variables';
import themes from './colors';

export const fonts = StyleSheet.create({
  h1Title: {
    fontWeight: '500',
    fontSize: variables.fontSize.size26,
  },
  h2Title: {
    fontWeight: '500',
    fontSize: variables.fontSize.size26,
    lineHeight: variables.lineHeight[37],
    color: themes.dark.WHITE,
  },
  h3Title: {
    fontWeight: variables.fontWeight.bold,
    fontSize: variables.fontSize.size20,
    lineHeight: variables.lineHeight[24],
    letterSpacing: variables.letterSpacing['0.5'],
    color: themes.dark.WHITE,
  },
  title14: {
    fontWeight: '400',
    fontSize: variables.fontSize.size14,
    lineHeight: variables.lineHeight[21],
    color: themes.dark.WHITE,
  },
  title18: {
    fontWeight: '500',
    fontSize: variables.fontSize.size18,
    lineHeight: variables.lineHeight[27],
    color: themes.dark.WHITE,
  },
  title9: {
    fontWeight: '400',
    fontSize: variables.fontSize.size8,
    lineHeight: variables.lineHeight[13],
    color: themes.dark.WHITE,
  },
});
