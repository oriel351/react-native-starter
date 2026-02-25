# AGENTS.md

This file defines project-specific working rules for Codex-like agents.
Apply these rules to all changes in this repository.

## 1) Architecture Boundaries

- Keep `app/` routing-only.
- Route files should re-export screens from `src/features/*/screens`.
- `app/_layout.tsx` and other layout files may configure navigation/providers, but must not contain feature UI composition.
- Feature/domain logic belongs in `src/features/*`.
- Shared UI primitives belong in `src/ui/*`.
- SDK/framework-specific integrations (Expo, router, storage, symbols, haptics, etc.) must be accessed only via `src/platform/*` adapters.
- Components and features must not import Expo SDK packages directly.

## 2) Folder Conventions

- `src/features/<feature>/screens/*` for feature screens.
- `src/features/<feature>/{components,hooks,store,guards}` as needed.
- `src/ui/layout/*` for layout primitives (`AppShell`, `Screen`, `AppHeader`).
- `src/ui/theme/*` for tokens/hooks.
- `src/i18n/*` for i18n setup and resources.
- `src/lib/*` for app-level utilities that are framework-agnostic.
- `src/platform/*` for framework/SDK adapters and contracts.

## 3) Styling Rules

- Use `StyleSheet.create` for component styles.
- No inline style objects in JSX.
- Avoid creating separate `styles` and `themedStyles` objects; use a single consolidated styles object in each component.
- Use tokens from `@/ui/theme` for spacing, colors, and typography.
- Do not hardcode colors/spacing/font sizes in components unless there is a strong reason.
- Keep visual output stable unless a styling redesign is explicitly requested.

## 4) Layout Rules

- Screens should use shared layout primitives (`Screen`, `AppShell`, `AppHeader`) instead of ad-hoc wrappers.
- Respect safe areas and shared screen padding tokens.
- Keep content centered/contained consistently where layout primitives define it.
- Do not introduce one-off layout patterns without a clear reason.

## 5) RTL + LTR Rules

- Prefer logical properties over physical direction:
  - `paddingStart`/`paddingEnd`
  - `marginStart`/`marginEnd`
  - `textAlign: "start"`
- Avoid hardcoded left/right alignment and offsets unless unavoidable.
- Any directional logic must continue to work in both LTR and RTL.

## 6) Theme Rules

- Theme values must come from `src/ui/theme` tokens/hooks.
- Keep light/dark support intact.
- Do not embed hex color values in components.
- Preserve current behavior of theme hooks unless explicitly asked to change behavior.

## 7) i18n Rules

- No new hardcoded user-facing strings in components.
- Use `react-i18next` (`t(...)`) for UI text.
- Translation resources live under `src/i18n/resources`.
- Language persistence must use storage abstraction, not component-local memory.
- RTL language handling should be applied centrally in i18n/bootstrap logic.

## 8) TypeScript + Imports

- Keep TypeScript strict and clean (no unnecessary `any`).
- Use path alias imports for source modules: `@/* -> src/*`.
- Prefer explicit exported types for public adapters/helpers.

## 9) Validation Before Finalizing

Run these checks after substantial changes:

1. `npx tsc --noEmit`
2. `npx expo export --platform web --output-dir /tmp/kookit-mobile-export` (or an equivalent non-interactive Expo validation)

If a command cannot run, state that clearly.

## 10) Git Workflow

- Make small, logical commits.
- Use Conventional Commit style (`feat:`, `fix:`, `refactor:`, `chore:`).
- When requested, use step-by-step commits (one commit per migration step/layer).
- Do not create any commit (single commit or series of commits) unless the user explicitly requests it, or the commit plan is confirmed and approved by the user.
- Do not amend commits unless explicitly requested.

## 11) Non-Goals / Guardrails

- Do not introduce new UI libraries for styling/layout unless explicitly requested.
- Do not redesign UI when task is architecture/foundation only.
- Do not move assets or root config files unless explicitly requested.
