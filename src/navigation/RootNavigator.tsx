import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PlaceholderScreen } from '@/screens/PlaceholderScreen';
import { colors } from '@/theme';

import { OnboardingNavigator } from './OnboardingNavigator';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Root navigator.
 *
 * Starts in Onboarding. `Main` is still the placeholder — it becomes the tab
 * navigator with the next task. Once auth lands, the initial route is chosen
 * from session and onboarding-completion state rather than hardcoded.
 */
export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
      <Stack.Screen name="Main" component={PlaceholderScreen} options={{ animation: 'fade' }} />
    </Stack.Navigator>
  );
}
