import type { NavigatorScreenParams } from '@react-navigation/native';

/**
 * VITAL AI — Route contracts.
 *
 * Declared up front so screens added later are type-safe from the first
 * commit. Only `RootStackParamList` has registered screens today; the auth,
 * onboarding and tab lists are the agreed shape for the navigators that come
 * with those features.
 */

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type OnboardingStackParamList = {
  Welcome: undefined;
  GoalSelection: undefined;
  HealthConditions: undefined;
  UserInformation: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Progress: undefined;
  /** Placeholder route for the centre FAB; it opens the action menu rather than navigating. */
  Action: undefined;
  AiCoach: undefined;
  Planning: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Onboarding: NavigatorScreenParams<OnboardingStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
};

/**
 * Registers the root param list globally, so `useNavigation()` is typed
 * without an explicit generic at every call site.
 */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
