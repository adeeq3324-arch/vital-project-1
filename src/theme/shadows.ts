import { Platform, type ViewStyle } from 'react-native';

/**
 * VITAL AI — Elevation.
 *
 * The design leans on soft, low-contrast shadows to lift white cards off a
 * white background. iOS uses shadow* props; Android uses `elevation`, so each
 * token sets both.
 */

type Shadow = Pick<
  ViewStyle,
  'shadowColor' | 'shadowOffset' | 'shadowOpacity' | 'shadowRadius' | 'elevation'
>;

const build = (
  offsetY: number,
  blur: number,
  opacity: number,
  elevation: number,
  color = '#111827',
): Shadow =>
  Platform.select<Shadow>({
    ios: {
      shadowColor: color,
      shadowOffset: { width: 0, height: offsetY },
      shadowOpacity: opacity,
      shadowRadius: blur,
    },
    android: { elevation, shadowColor: color },
    default: {
      shadowColor: color,
      shadowOffset: { width: 0, height: offsetY },
      shadowOpacity: opacity,
      shadowRadius: blur,
    },
  }) as Shadow;

export const shadows = {
  none: Platform.select<Shadow>({
    ios: { shadowColor: 'transparent', shadowOpacity: 0, shadowRadius: 0 },
    android: { elevation: 0 },
    default: { shadowColor: 'transparent', shadowOpacity: 0, shadowRadius: 0 },
  }) as Shadow,
  /** Inputs and flat list rows. */
  xs: build(1, 2, 0.04, 1),
  /** Default card resting elevation. */
  sm: build(2, 8, 0.06, 2),
  /** Raised cards: goal cards, plan cards. */
  md: build(4, 12, 0.08, 4),
  /** Bottom sheets and the tab bar. */
  lg: build(-2, 16, 0.08, 8),
  /** Modals and the FAB action menu. */
  xl: build(8, 24, 0.12, 12),
  /** Violet-tinted glow under the primary CTA and FAB. */
  primary: build(6, 16, 0.32, 8, '#6D28D9'),
} as const;

export type ShadowLevel = keyof typeof shadows;
