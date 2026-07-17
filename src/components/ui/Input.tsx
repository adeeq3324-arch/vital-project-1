import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native';

import { colors, layout, radius, spacing, typography } from '@/theme';

type InputProps = Omit<TextInputProps, 'style'> & {
  /** Feather icon rendered at the leading edge, as in the design. */
  icon: keyof typeof Feather.glyphMap;
};

/**
 * Bordered text input with a leading grey icon. Border turns violet on focus.
 */
export function Input({ icon, ...inputProps }: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, focused && styles.containerFocused]}>
      <Feather
        name={icon}
        size={layout.iconSizeSmall}
        color={focused ? colors.primary : colors.text.disabled}
      />
      <TextInput
        {...inputProps}
        style={styles.input}
        placeholderTextColor={colors.text.disabled}
        onFocus={(event) => {
          setFocused(true);
          inputProps.onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          inputProps.onBlur?.(event);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    height: layout.inputHeight,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: layout.hairline,
    borderColor: colors.border,
    borderRadius: radius.md,
  },
  containerFocused: {
    borderColor: colors.primary,
  },
  input: {
    flex: 1,
    ...typography.body,
    color: colors.text.primary,
    // Strips Android's default vertical padding so text centres in the row.
    paddingVertical: 0,
  },
});
