# Vital AI

Premium AI Fitness & Health mobile app. React Native + Expo + TypeScript.

## Getting started

```bash
npm install
cp .env.example .env   # then fill in the values
npm start
```

Then press `i` for iOS, `a` for Android.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Expo dev server |
| `npm run ios` / `npm run android` | Start and open on a simulator |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint via `expo lint` |

## Structure

```
src/
  components/   Reusable UI (ui/ primitives, charts/, layout/)
  config/       env.ts — typed runtime configuration
  hooks/        Shared hooks
  navigation/   React Navigation: RootNavigator + route types
  screens/      One folder per feature area
  services/     API client and backend integrations
  theme/        Design system — single source of truth
  types/        Shared domain types
```

Path alias `@/*` maps to `src/*`.

## Design system

`src/theme/` is the **only** place visual constants are defined. Never hardcode a
colour, font size, spacing value, radius or shadow in a screen — import from
`@/theme` instead:

```ts
import { theme } from '@/theme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.base,
    padding: theme.layout.cardPadding,
    ...theme.shadows.sm,
  },
});
```

| File | Contains |
| --- | --- |
| `colors.ts` | Palette, semantic colours, per-metric accents, gradients |
| `typography.ts` | Font families, sizes, weights, named text styles |
| `spacing.ts` | 4pt spacing scale, layout constants, radii |
| `shadows.ts` | Cross-platform elevation tokens |
| `navigationTheme.ts` | Adapts the above to React Navigation |

The app is **light theme only** — white surfaces, violet (`#6D28D9`) primary,
with orange / cyan / green / red accents colour-coding each health domain. This
is locked in `app.json` via `userInterfaceStyle: "light"`.

## Navigation

Classic React Navigation (native-stack + bottom-tabs), not Expo Router. Routes
are declared in `src/navigation/types.ts` and registered globally, so
`useNavigation()` is typed without a generic at the call site.

`RootNavigator` currently renders a single placeholder screen. As features land
it switches between the `Auth`, `Onboarding` and `Main` navigators.

## Conventions

- Production code only — no placeholder implementations.
- Secrets never reach the client. Only `EXPO_PUBLIC_*` vars are bundled; treat
  every value in `.env` as public.
- Feature-specific components live beside their screen; only genuinely shared
  ones go in `src/components/`.
