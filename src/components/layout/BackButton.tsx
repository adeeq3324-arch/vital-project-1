import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet } from 'react-native';

import { colors, radius, spacing } from '@/theme';

/**
 * Bare chevron used as the back affordance on onboarding screens. Sits at the
 * screen's leading edge with a negative offset so the glyph — not its touch
 * target — aligns to the gutter.
 */
export function BackButton() {
  const navigation = useNavigation();

  if (!navigation.canGoBack()) return null;

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      accessibilityRole="button"
      accessibilityLabel="Go back"
      hitSlop={spacing.sm}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Feather name="chevron-left" size={26} color={colors.text.primary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 36,
    height: 36,
    marginLeft: -spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.full,
  },
  pressed: {
    backgroundColor: colors.surfaceSunken,
  },
});
