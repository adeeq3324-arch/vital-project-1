import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, layout, radius, shadows, spacing, typography } from '@/theme';

export type SelectOption<T extends string> = {
  value: T;
  label: string;
};

type SelectProps<T extends string> = {
  value: T | null;
  options: readonly SelectOption<T>[];
  placeholder: string;
  onChange: (value: T) => void;
  /** Optional leading Feather icon, matching `Input`. */
  icon?: keyof typeof Feather.glyphMap;
  /** Title shown on the picker sheet. */
  title: string;
};

/**
 * Select control. Renders like `Input` with a trailing chevron, and opens a
 * bottom sheet of options — native pickers can't be styled to the design.
 */
export function Select<T extends string>({
  value,
  options,
  placeholder,
  onChange,
  icon,
  title,
}: SelectProps<T>) {
  const [open, setOpen] = useState(false);
  const insets = useSafeAreaInsets();

  const selected = options.find((option) => option.value === value);

  return (
    <>
      <Pressable
        onPress={() => setOpen(true)}
        accessibilityRole="button"
        accessibilityLabel={`${title}. ${selected ? selected.label : placeholder}`}
        style={({ pressed }) => [styles.control, pressed && styles.controlPressed]}
      >
        {icon ? (
          <Feather name={icon} size={layout.iconSizeSmall} color={colors.text.disabled} />
        ) : null}
        <Text style={[styles.value, !selected && styles.placeholder]} numberOfLines={1}>
          {selected ? selected.label : placeholder}
        </Text>
        <Feather name="chevron-down" size={layout.iconSizeSmall} color={colors.text.tertiary} />
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="slide"
        onRequestClose={() => setOpen(false)}
        statusBarTranslucent
      >
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)} accessibilityLabel="Close" />
        <View style={[styles.sheet, { paddingBottom: insets.bottom + spacing.base }]}>
          <View style={styles.grabber} />
          <Text style={styles.sheetTitle}>{title}</Text>
          <ScrollView bounces={false}>
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <Pressable
                  key={option.value}
                  onPress={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  accessibilityRole="button"
                  accessibilityState={{ selected: isSelected }}
                  style={({ pressed }) => [styles.option, pressed && styles.optionPressed]}
                >
                  <Text style={[styles.optionLabel, isSelected && styles.optionLabelSelected]}>
                    {option.label}
                  </Text>
                  {isSelected ? (
                    <Feather name="check" size={layout.iconSize} color={colors.primary} />
                  ) : null}
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  control: {
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
  controlPressed: {
    backgroundColor: colors.surfaceMuted,
  },
  value: {
    flex: 1,
    ...typography.body,
    color: colors.text.primary,
  },
  placeholder: {
    color: colors.text.disabled,
  },
  backdrop: {
    flex: 1,
    backgroundColor: colors.overlay,
  },
  sheet: {
    maxHeight: '60%',
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    paddingHorizontal: layout.screenPadding,
    paddingTop: spacing.md,
    ...shadows.xl,
  },
  grabber: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: radius.full,
    backgroundColor: colors.borderStrong,
    marginBottom: spacing.base,
  },
  sheetTitle: {
    ...typography.h3,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: layout.minTouchTarget + spacing.xs,
    borderBottomWidth: layout.hairline,
    borderBottomColor: colors.divider,
  },
  optionPressed: {
    backgroundColor: colors.surfaceMuted,
  },
  optionLabel: {
    ...typography.body,
    color: colors.text.secondary,
  },
  optionLabelSelected: {
    ...typography.bodyStrong,
    color: colors.primary,
  },
});
