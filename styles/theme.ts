export interface ThemeType {
	colors: {
		backgroundColor: string;
		textColor: string;
		selection: string;
	};
}

export const darkTheme = {
	colors: {
		backgroundColor: '#262934',
		textColor: '#e3e5e5',
		selection: '#c3c5c5',
	},
} as const;

export const lightTheme = {
	colors: {
		backgroundColor: '#f3f5f5',
		textColor: '#262934',
		selection: '#464954',
	},
} as const;
