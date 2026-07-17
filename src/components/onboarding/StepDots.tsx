import { StyleSheet, View } from 'react-native';

import { colors, radius } from '@/theme';

const TOTAL_STEPS = 4;

/**
 * Connected-dot progress indicator for the onboarding flow. Completed steps
 * are small violet dots; the current step is a larger violet dot; upcoming
 * steps are grey.
 */
export function StepDots({ currentStep }: { currentStep: number }) {
  return (
    <View
      style={styles.container}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 1, max: TOTAL_STEPS, now: currentStep }}
      accessibilityLabel={`Step ${currentStep} of ${TOTAL_STEPS}`}
    >
      {Array.from({ length: TOTAL_STEPS }, (_, index) => {
        const step = index + 1;
        const isCurrent = step === currentStep;
        const isComplete = step < currentStep;

        return (
          <View key={step} style={styles.segment}>
            {index > 0 ? (
              <View style={[styles.connector, isComplete || isCurrent ? styles.connectorDone : null]} />
            ) : null}
            <View
              style={[
                styles.dot,
                isCurrent && styles.dotCurrent,
                (isComplete || isCurrent) && styles.dotFilled,
              ]}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  segment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connector: {
    width: 28,
    height: 1.5,
    backgroundColor: colors.border,
  },
  connectorDone: {
    backgroundColor: colors.primaryLight,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: radius.full,
    backgroundColor: colors.border,
  },
  dotFilled: {
    backgroundColor: colors.primary,
  },
  dotCurrent: {
    width: 11,
    height: 11,
  },
});
