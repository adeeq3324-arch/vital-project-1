import { createContext, useCallback, useContext, useMemo, useReducer, type ReactNode } from 'react';

import type { ActivityLevel, Gender, HealthCondition, PrimaryGoal } from '@/types';

/**
 * VITAL AI — Onboarding state.
 *
 * Holds everything collected across the four onboarding screens so it can
 * personalise the rest of the app. State is in memory for now; persisting it
 * and syncing to the backend happens when auth lands.
 */

export type OnboardingData = {
  goal: PrimaryGoal | null;
  conditions: HealthCondition[];
  username: string;
  age: string;
  gender: Gender | null;
  height: string;
  weight: string;
  activityLevel: ActivityLevel | null;
  targetWeight: string;
};

export type OnboardingTextField = 'username' | 'age' | 'height' | 'weight' | 'targetWeight';

const initialData: OnboardingData = {
  goal: null,
  conditions: [],
  username: '',
  age: '',
  gender: null,
  height: '',
  weight: '',
  activityLevel: null,
  targetWeight: '',
};

type Action =
  | { type: 'setGoal'; goal: PrimaryGoal }
  | { type: 'toggleCondition'; condition: HealthCondition }
  | { type: 'setField'; field: OnboardingTextField; value: string }
  | { type: 'setGender'; gender: Gender }
  | { type: 'setActivityLevel'; activityLevel: ActivityLevel }
  | { type: 'reset' };

/**
 * "None of these" is mutually exclusive with every real condition: choosing it
 * clears the others, and choosing any other condition clears it.
 */
function nextConditions(current: HealthCondition[], condition: HealthCondition): HealthCondition[] {
  if (condition === 'none') {
    return current.includes('none') ? [] : ['none'];
  }
  const withoutNone = current.filter((item) => item !== 'none');
  return withoutNone.includes(condition)
    ? withoutNone.filter((item) => item !== condition)
    : [...withoutNone, condition];
}

function reducer(state: OnboardingData, action: Action): OnboardingData {
  switch (action.type) {
    case 'setGoal':
      return { ...state, goal: action.goal };
    case 'toggleCondition':
      return { ...state, conditions: nextConditions(state.conditions, action.condition) };
    case 'setField':
      return { ...state, [action.field]: action.value };
    case 'setGender':
      return { ...state, gender: action.gender };
    case 'setActivityLevel':
      return { ...state, activityLevel: action.activityLevel };
    case 'reset':
      return initialData;
  }
}

type OnboardingContextValue = {
  data: OnboardingData;
  setGoal: (goal: PrimaryGoal) => void;
  toggleCondition: (condition: HealthCondition) => void;
  setField: (field: OnboardingTextField, value: string) => void;
  setGender: (gender: Gender) => void;
  setActivityLevel: (activityLevel: ActivityLevel) => void;
  reset: () => void;
  /** True once every field on the User Information screen has a value. */
  isProfileComplete: boolean;
};

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [data, dispatch] = useReducer(reducer, initialData);

  const setGoal = useCallback((goal: PrimaryGoal) => dispatch({ type: 'setGoal', goal }), []);
  const toggleCondition = useCallback(
    (condition: HealthCondition) => dispatch({ type: 'toggleCondition', condition }),
    [],
  );
  const setField = useCallback(
    (field: OnboardingTextField, value: string) => dispatch({ type: 'setField', field, value }),
    [],
  );
  const setGender = useCallback((gender: Gender) => dispatch({ type: 'setGender', gender }), []);
  const setActivityLevel = useCallback(
    (activityLevel: ActivityLevel) => dispatch({ type: 'setActivityLevel', activityLevel }),
    [],
  );
  const reset = useCallback(() => dispatch({ type: 'reset' }), []);

  const isProfileComplete =
    data.username.trim().length > 0 &&
    data.age.trim().length > 0 &&
    data.gender !== null &&
    data.height.trim().length > 0 &&
    data.weight.trim().length > 0 &&
    data.activityLevel !== null &&
    data.targetWeight.trim().length > 0;

  const value = useMemo(
    () => ({
      data,
      setGoal,
      toggleCondition,
      setField,
      setGender,
      setActivityLevel,
      reset,
      isProfileComplete,
    }),
    [data, setGoal, toggleCondition, setField, setGender, setActivityLevel, reset, isProfileComplete],
  );

  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
}

export function useOnboarding(): OnboardingContextValue {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used inside an <OnboardingProvider>.');
  }
  return context;
}
