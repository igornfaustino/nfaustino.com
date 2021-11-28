const defaultTheme = {
	colors: {
		backgroundColor: '#262934',
		textColor: '#f3f5f5',
	},
} as const;

export type ThemeType = typeof defaultTheme;

export default defaultTheme;
