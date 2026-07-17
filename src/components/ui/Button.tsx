import { ActivityIndicator, Pressable, StyleSheet, Text, type ViewStyle } from 'react-native';

import { colors, layout, radius, shadows, typography } from '@/theme';

type ButtonProps = {
  label: string;
  onPress: () => void;
  /** Renders the pale-violet disabled treatment from the design. */
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  accessibilityHint?: string;
};

/**
 * Full-width primary CTA. Solid violet when enabled; pale violet surface with
 * violet-tinted label when disabled, matching the "Next" button in the design.
 */
export function Button({
  label,
  onPress,
  disabled = false,
  loading = false,
  style,
  accessibilityHint,
}: ButtonProps) {
  const inactive = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={inactive}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled: inactive, busy: loading }}
      style={({ pressed }) => [
        styles.base,
        inactive ? styles.disabled : styles.enabled,
        pressed && !inactive && styles.pressed,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.onPrimary} />
      ) : (
        <Text style={[styles.label, inactive ? styles.labelDisabled : styles.labelEnabled]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: layout.ctaHeight,
    borderRadius: radius.base,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enabled: {
    backgroundColor: colors.primary,
    ...shadows.primary,
  },
  disabled: {
    backgroundColor: colors.primarySurface,
  },
  pressed: {
    backgroundColor: colors.primaryDark,
    transform: [{ scale: 0.98 }],
  },
  label: {
    ...typography.button,
  },
  labelEnabled: {
    color: colors.onPrimary,
  },
  labelDisabled: {
    color: colors.primaryLight,
  },
});
