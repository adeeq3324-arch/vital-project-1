import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { IconTile } from '@/components/ui/IconTile';
import { colors, spacing, typography, type AccentName } from '@/theme';

/**
 * Icon-tile-plus-two-lines row listing the app's value props on the Welcome
 * screen.
 */
export function FeatureRow({
  icon,
  accent,
  title,
  subtitle,
}: {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  accent: AccentName;
  title: string;
  subtitle: string;
}) {
  return (
    <View style={styles.row} accessible accessibilityLabel={`${title} ${subtitle}`}>
      <IconTile accent={accent} size={40}>
        <MaterialCommunityIcons name={icon} size={21} color={colors.accent[accent]} />
      </IconTile>
      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  copy: {
    flex: 1,
  },
  title: {
    ...typography.bodyStrong,
    color: colors.text.primary,
  },
  subtitle: {
    ...typography.body,
    color: colors.text.tertiary,
  },
});
