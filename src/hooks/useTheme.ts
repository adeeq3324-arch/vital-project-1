import { theme, type Theme } from '@/theme';

/**
 * Accessor for the design system.
 *
 * The app is light-theme only, so this returns the single static theme. It
 * exists as a hook to keep call sites stable if a dark theme is introduced —
 * only this file changes.
 */
export function useTheme(): Theme {
  return theme;
}
