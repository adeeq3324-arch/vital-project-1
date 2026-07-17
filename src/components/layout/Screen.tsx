import { StyleSheet, View, type ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, layout, spacing } from '@/theme';

/**
 * Screen container: applies the background, safe-area insets and the standard
 * horizontal gutter so every screen shares one set of edges.
 */
export function Screen({
  children,
  style,
  /** Disable when the screen's own scroll view should own the bottom inset. */
  edges = { top: true, bottom: true },
}: {
  children: React.ReactNode;
  style?: ViewStyle;
  edges?: { top?: boolean; bottom?: boolean };
}) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: edges.top ? insets.top + spacing.sm : 0,
          paddingBottom: edges.bottom ? Math.max(insets.bottom, spacing.base) : 0,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: layout.screenPadding,
  },
});
