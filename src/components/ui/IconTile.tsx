import { StyleSheet, View } from 'react-native';

import { colors, radius, type AccentName } from '@/theme';

type IconTileProps = {
  /** Colour family: sets the tint background; the icon should use `colors.accent[accent]`. */
  accent: AccentName;
  size?: number;
  children: React.ReactNode;
};

/**
 * Rounded square with a soft tinted background holding a coloured icon — the
 * recurring motif across the welcome feature rows and health-condition tiles.
 */
export function IconTile({ accent, size = 40, children }: IconTileProps) {
  return (
    <View
      style={[
        styles.tile,
        {
          width: size,
          height: size,
          borderRadius: size <= 32 ? radius.sm : radius.md,
          backgroundColor: colors.accentSurface[accent],
        },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
