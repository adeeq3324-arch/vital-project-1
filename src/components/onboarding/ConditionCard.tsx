import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text } from 'react-native';

import { IconTile } from '@/components/ui/IconTile';
import { colors, layout, radius, shadows, spacing, typography, type AccentName } from '@/theme';

type ConditionCardProps = {
  label: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  accent: AccentName;
  selected: boolean;
  onPress: () => void;
};

/**
 * Half-width, multi-select health-condition tile. Selection tints the border
 * and background violet, keeping the icon's own accent colour intact.
 */
export function ConditionCard({ label, icon, accent, selected, onPress }: ConditionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: selected }}
      accessibilityLabel={label}
      style={({ pressed }) => [styles.card, selected && styles.cardSelected, pressed && styles.pressed]}
    >
      <IconTile accent={accent} size={30}>
        <MaterialCommunityIcons name={icon} size={17} color={colors.accent[accent]} />
      </IconTile>
      <Text style={styles.label} numberOfLines={2}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: layout.hairline,
    borderColor: colors.border,
    borderRadius: radius.md,
    ...shadows.xs,
  },
  cardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primarySubtle,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  label: {
    flex: 1,
    ...typography.label,
    color: colors.text.primary,
  },
});
