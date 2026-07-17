/**
 * VITAL AI — Shared domain types.
 *
 * Cross-cutting types live here. Types used by exactly one feature belong
 * beside that feature instead.
 */

export type Gender = 'male' | 'female' | 'other' | 'prefer_not_to_say';

export type ActivityLevel =
  | 'sedentary'
  | 'lightly_active'
  | 'moderately_active'
  | 'very_active'
  | 'extremely_active';

export type PrimaryGoal = 'muscle_gain' | 'weight_loss' | 'healthy_lifestyle';

export type HealthCondition =
  | 'diabetes'
  | 'high_blood_pressure'
  | 'heart_conditions'
  | 'asthma'
  | 'thyroid_problems'
  | 'high_cholesterol'
  | 'kidney_problems'
  | 'arthritis'
  | 'pregnancy'
  | 'none';

export type UnitSystem = 'metric' | 'imperial';

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

/** Envelope returned by every service call, so callers handle failure explicitly. */
export type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

/** ISO-8601 timestamp string. */
export type ISODateString = string;
