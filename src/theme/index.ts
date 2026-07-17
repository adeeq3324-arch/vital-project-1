import { colors, gradients } from './colors';
import { shadows } from './shadows';
import { layout, radius, spacing } from './spacing';
import { fontFamily, fontSize, fontWeight, typography } from './typography';

/**
 * VITAL AI — Design system entry point.
 *
 * Single source of truth for every visual constant in the app. Screens and
 * components must import from here (`@/theme`) and never hardcode a colour,
 * size, radius or shadow.
 *
 * @example
 * import { theme } from '@/theme';
 * const styles = StyleSheet.create({
 *   card: {
 *     backgroundColor: theme.colors.surface,
 *     borderRadius: theme.radius.base,
 *     padding: theme.layout.cardPadding,
 *     ...theme.shadows.sm,
 *   },
 * });
 */
export const theme = {
  colors,
  gradients,
  typography,
  fontFamily,
  fontSize,
  fontWeight,
  spacing,
  layout,
  radius,
  shadows,
} as const;

export type Theme = typeof theme;

export { colors, gradients } from './colors';
export { shadows } from './shadows';
export { layout, radius, spacing } from './spacing';
export { fontFamily, fontSize, fontWeight, typography } from './typography';

export type { AccentName, ColorTheme, GradientName, MetricName } from './colors';
export type { ShadowLevel } from './shadows';
export type { Radius, Spacing } from './spacing';
export type { TypographyVariant } from './typography';

export { navigationTheme } from './navigationTheme';
