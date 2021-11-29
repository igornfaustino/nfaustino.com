export interface ThemeType {
	colors: {
		backgroundColor: string;
		textColor: string;
	};
}

export const darkTheme = {
	colors: {
		backgroundColor: '#262934',
		textColor: '#f3f5f5',
	},
} as const;

export const lightTheme = {
	colors: {
		backgroundColor: '#f3f5f5',
		textColor: '#262934',
	},
} as const;
