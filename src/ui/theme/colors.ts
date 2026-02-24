export type ColorTokens = {
  background: string;
  surface: string;
  primary: string;
  secondary: string;
  text: string;
  mutedText: string;
  border: string;
  danger: string;
  success: string;
};

export const colors: { light: ColorTokens; dark: ColorTokens } = {
  light: {
    background: '#ffffff',
    surface: '#ffffff',
    primary: '#0a7ea4',
    secondary: '#687076',
    text: '#11181C',
    mutedText: '#687076',
    border: '#d0d7de',
    danger: '#d92d20',
    success: '#067647',
  },
  dark: {
    background: '#151718',
    surface: '#1c1f22',
    primary: '#ffffff',
    secondary: '#9BA1A6',
    text: '#ECEDEE',
    mutedText: '#9BA1A6',
    border: '#2f353a',
    danger: '#f97066',
    success: '#47cd89',
  },
};
