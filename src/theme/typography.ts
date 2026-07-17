import { Platform, type TextStyle } from 'react-native';

/**
 * VITAL AI — Type scale.
 *
 * The design uses a single geometric sans throughout. We map it to the
 * platform system face (SF Pro on iOS, Roboto on Android) so the foundation
 * has no font-loading dependency; swap `fontFamily` here if a custom face is
 * added later and every screen follows.
 */

export const fontFamily = {
  regular: Platform.select({ ios: 'System', android: 'sans-serif', default: 'System' }),
  medium: Platform.select({ ios: 'System', android: 'sans-serif-medium', default: 'System' }),
  semibold: Platform.select({ ios: 'System', android: 'sans-serif-medium', default: 'System' }),
  bold: Platform.select({ ios: 'System', android: 'sans-serif', default: 'System' }),
} as const;

export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const satisfies Record<string, TextStyle['fontWeight']>;

export const fontSize = {
  xs: 11,
  sm: 12,
  base: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 34,
  '5xl': 44,
} as const;

/**
 * Named text styles. Every `<Text>` in the app should resolve to one of these
 * rather than declaring ad-hoc sizes.
 */
export const typography = {
  /** Welcome screen wordmark. */
  display: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize['5xl'],
    fontWeight: fontWeight.bold,
    lineHeight: 52,
    letterSpacing: -0.8,
  },
  /** Screen headings: "What is your primary goal?". */
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.bold,
    lineHeight: 36,
    letterSpacing: -0.4,
  },
  /** Large numerals: health score, calorie totals. */
  h2: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.bold,
    lineHeight: 30,
    letterSpacing: -0.2,
  },
  /** Card titles, nav bar titles. */
  h3: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    lineHeight: 24,
  },
  /** Section headers: "Today's Overview". */
  h4: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    lineHeight: 22,
  },
  /** Default body copy. */
  body: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.base,
    fontWeight: fontWeight.regular,
    lineHeight: 20,
  },
  /** Emphasised body: list item titles, metric values. */
  bodyStrong: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    lineHeight: 20,
  },
  /** Field labels, secondary rows. */
  label: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: 16,
  },
  /** Units, timestamps, helper text. */
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    lineHeight: 16,
  },
  /** Tab bar labels, chips. */
  micro: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    lineHeight: 14,
  },
  /** Text inside buttons. */
  button: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSize.md,
    fontWeight: fontWeight.semibold,
    lineHeight: 22,
  },
} as const satisfies Record<string, TextStyle>;

export type TypographyVariant = keyof typeof typography;
