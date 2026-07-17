import { StyleSheet, Text, View, type ViewStyle } from 'react-native';

import { colors, spacing, typography } from '@/theme';

/**
 * Label-above-control wrapper shared by `Input` and `Select`, so every field on
 * the User Information screen aligns identically.
 */
export function Field({
  label,
  children,
  style,
}: {
  label: string;
  children: React.ReactNode;
  style?: ViewStyle;
}) {
  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    ...typography.label,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
});
