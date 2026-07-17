/**
 * VITAL AI — Spacing and radius scale.
 *
 * A 4pt base grid. The design's dominant rhythm is 16pt screen gutters,
 * 12pt gaps between cards, and 16pt internal card padding.
 */

export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
} as const;

export const layout = {
  /** Horizontal screen gutter. */
  screenPadding: spacing.base,
  /** Internal padding for cards and inputs. */
  cardPadding: spacing.base,
  /** Vertical gap between stacked cards. */
  cardGap: spacing.md,
  /** Vertical gap between screen sections. */
  sectionGap: spacing.xl,
  /** Height of primary buttons and text inputs. */
  controlHeight: 52,
  /** Height of full-width CTAs (Get Started, Complete Setup). */
  ctaHeight: 56,
  /** Height of text inputs and selects — shorter than a CTA, per the design. */
  inputHeight: 48,
  /** Height of compact controls: chips, segmented control. */
  controlHeightSmall: 36,
  /** Bottom tab bar height, excluding the safe-area inset. */
  tabBarHeight: 60,
  /** Diameter of the centre action button in the tab bar. */
  fabSize: 56,
  /** How far the FAB lifts above the tab bar's top edge. */
  fabLift: 18,
  /** Minimum touch target, per platform accessibility guidance. */
  minTouchTarget: 44,
  /** Standard icon size in list rows and tab bar. */
  iconSize: 24,
  /** Icon size inside tinted metric tiles. */
  iconSizeSmall: 18,
  /** Hairline used for borders and dividers. */
  hairline: 1,
} as const;

export const radius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  /** Default for cards, inputs and buttons. */
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 28,
  /** Pills: chips, segmented control, FAB. */
  full: 999,
} as const;

export type Spacing = keyof typeof spacing;
export type Radius = keyof typeof radius;
