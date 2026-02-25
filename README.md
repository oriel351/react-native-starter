# react native starter

This is a React Native + Expo starter project with the core plumbing already wired:

- File-based routing
- Feature-first folder structure
- i18n with language persistence and RTL support
- Light/dark theme tokens
- Shared layout primitives
- Platform adapter layer for SDK/framework access

Use this as a base for any React Native app, then add screens and richer UI by following the project conventions.

## Quick start

```bash
npm install
npx expo start
```

## Project structure

- `app/`
  - Routing only.
  - Route files should re-export screens from `src/features/*/screens`.
  - Layout files configure navigation/providers only.
- `src/features/<feature>/`
  - Feature/domain code.
  - Use `screens/` for route-level UI and add `components/`, `hooks/`, `store/`, `guards/` as needed.
- `src/ui/layout/`
  - Shared layout primitives (`AppShell`, `Screen`, `AppHeader`).
- `src/ui/theme/`
  - Theme tokens/hooks (colors, spacing, typography, layout, color scheme).
  - Light/dark behavior is already enabled.
- `src/i18n/`
  - i18n setup, supported languages, translation resources.
- `src/lib/`
  - Framework-agnostic app utilities.
- `src/platform/`
  - Adapters for Expo/SDK/framework APIs (navigation, storage, icons, haptics, etc.).

## Conventions to follow

- Separation of concerns
  - Keep business logic in features.
  - Keep routing in `app/`.
  - Keep SDK calls behind `src/platform/*` adapters.
- Strings
  - Do not hardcode user-facing text in components.
  - Add strings to `src/i18n/resources/*` and use `t(...)`.
- Styles
  - Use `StyleSheet.create`.
  - Prefer theme tokens from `@/ui/theme` for spacing/colors/typography.
  - Use logical direction properties (`paddingStart`, `marginEnd`, `textAlign: "start"`) for RTL/LTR support.
- Layout
  - Prefer shared primitives (`Screen`, `AppShell`, `AppHeader`) over one-off wrappers.

## Validation

Run these before shipping changes:

```bash
npx tsc --noEmit
npx expo export --platform web --output-dir /tmp/kookit-mobile-export
```
