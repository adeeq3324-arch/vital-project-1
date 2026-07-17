import { DefaultTheme, type Theme as NavTheme } from '@react-navigation/native';

import { colors } from './colors';
import { fontFamily, fontWeight } from './typography';

/**
 * Adapts the VITAL AI design system to React Navigation's theme contract, so
 * navigator chrome (headers, card backgrounds, the transition background)
 * matches the rest of the app instead of falling back to library defaults.
 *
 * Passed to `<NavigationContainer theme={navigationTheme}>`.
 */
export const navigationTheme: NavTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: colors.primary,
    background: colors.background,
    card: colors.surface,
    text: colors.text.primary,
    border: colors.border,
    notification: colors.danger,
  },
  fonts: {
    regular: { fontFamily: fontFamily.regular, fontWeight: fontWeight.regular },
    medium: { fontFamily: fontFamily.medium, fontWeight: fontWeight.medium },
    bold: { fontFamily: fontFamily.semibold, fontWeight: fontWeight.semibold },
    heavy: { fontFamily: fontFamily.bold, fontWeight: fontWeight.bold },
  },
};
