export interface ThemeType {
	colors: {
		backgroundColor: string;
		textColor: string;
		selection: string;
		spotlightColor: string;
		spotlightSelectionColor: string;
		shadowColor: string;
	};
}

export const darkTheme = {
	colors: {
		backgroundColor: '#262934',
		textColor: '#e3e5e5',
		selection: '#c3c5c5',
		spotlightColor: '#464954',
		spotlightSelectionColor: '#363944',
		shadowColor: '#000',
	},
} as const;

export const lightTheme = {
	colors: {
		backgroundColor: '#f3f5f5',
		textColor: '#262934',
		selection: '#464954',
		spotlightColor: '#fff',
		spotlightSelectionColor: '#eee',
		shadowColor: '#444',
	},
} as const;
