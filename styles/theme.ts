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
		textColor: '#f3f5f5',
		selection: '#d3d5d5',
	},
} as const;

export const lightTheme = {
	colors: {
		backgroundColor: '#f3f5f5',
		textColor: '#262934',
		selection: '#464954',
	},
} as const;
