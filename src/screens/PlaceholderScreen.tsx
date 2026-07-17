import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, layout, typography } from '@/theme';

/**
 * Temporary landing screen proving the navigation container, safe areas and
 * theme are wired up. Deleted once the Welcome screen lands.
 */
export function PlaceholderScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <Text style={styles.title}>Vital AI</Text>
      <Text style={styles.subtitle}>Foundation ready</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: layout.screenPadding,
  },
  title: {
    ...typography.display,
    color: colors.primary,
  },
  subtitle: {
    ...typography.body,
    color: colors.text.tertiary,
  },
});
