const defaultTheme = {
	colors: {},
} as const;

export type ThemeType = typeof defaultTheme;

export default defaultTheme;
