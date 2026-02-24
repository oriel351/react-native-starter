# UI Architecture Rules

## Purpose

This project uses a centralized UI architecture so every screen follows the same layout, theming, and RTL/LTR behavior.

## Layout Conventions

- `app/` is routing-only.
- Feature UI lives in `src/features/*/screens`.
- Shared layout primitives live in `src/ui/layout`.
- Use `Screen` for standard screens and `Screen.Scroll` for scrollable screens.
- Use `AppHeader` for top header content (title + optional actions).
- Use shared screen spacing from `spacing.screenHorizontal` and `spacing.screenVertical`.
- Content width is capped by `layout.contentMaxWidth` for a centered feel on larger screens.

## Styling Rules

- Use `StyleSheet.create` for component styles.
- Use tokens from `src/ui/theme` for color, spacing, typography, and layout.
- Do not hardcode hex colors outside token files.
- Do not hardcode common spacing values when a token exists.

## RTL/LTR Rules

- Prefer logical properties:
  - `paddingStart` / `paddingEnd`
  - `marginStart` / `marginEnd`
  - `textAlign: "start"` where supported by the type system
- Avoid hardcoded `left`/`right` positioning unless unavoidable.
- For directional UI (for example header actions), resolve start/end behavior using `I18nManager.isRTL`.

Incorrect:

```ts
{
  paddingLeft: 16,
  paddingRight: 16,
  textAlign: 'left',
}
```

Correct:

```ts
{
  paddingStart: spacing.screenHorizontal,
  paddingEnd: spacing.screenHorizontal,
  textAlign: textAlignStart,
}
```

## Theme Rules

- Theme values come from `src/ui/theme/colors.ts`.
- Use `useTheme()` for current light/dark tokens in components.
- Keep compatibility helpers (`useThemeColor`, `theme.ts`) stable for existing code paths.

## Folder Ownership

- `src/ui/theme/*`: tokens and theme hooks.
- `src/ui/layout/*`: layout primitives (`AppShell`, `Screen`, `AppHeader`).
- `src/ui/components/*`: reusable, feature-agnostic UI pieces.
- `src/features/*`: feature-specific screens and logic.

## Usage Examples

Basic screen:

```tsx
import { Text } from 'react-native';

import { AppHeader } from '@/ui/layout/AppHeader';
import { Screen } from '@/ui/layout/Screen';
import { useTheme } from '@/ui/theme';

export default function ExampleScreen() {
  const { colors, typography } = useTheme();

  return (
    <Screen header={<AppHeader title="Example" />} centered>
      <Text style={{ color: colors.text, fontSize: typography.title.fontSize }}>Example</Text>
    </Screen>
  );
}
```

Scrollable screen:

```tsx
<Screen.Scroll header={<AppHeader title="List" />}>
  {/* scroll content */}
</Screen.Scroll>
```
