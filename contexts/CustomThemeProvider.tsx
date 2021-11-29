import {
	useCallback,
	useMemo,
	useState,
	createContext,
	FC,
	useEffect,
} from 'react';

import { ThemeProvider } from 'styled-components';

import { getCurrentThemeFromStore, saveThemeOnStore } from '../lib/theme';
import { darkTheme, lightTheme } from '../styles/theme';

type Context = {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
};

export const CustomThemeContext = createContext<Context>({
	theme: 'light',
	toggleTheme: () => {},
});

const CustomThemeProvider: FC = function ({ children }) {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	const toggleTheme = useCallback(() => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
			saveThemeOnStore(newTheme);
			return newTheme;
		});
	}, []);

	const contextValue = useMemo(
		() => ({ theme, toggleTheme }),
		[theme, toggleTheme]
	);

	useEffect(() => {
		const savedTheme = getCurrentThemeFromStore();
		setTheme(savedTheme);
	}, []);

	const currentTheme = theme === 'light' ? lightTheme : darkTheme;

	return (
		<CustomThemeContext.Provider value={contextValue}>
			<ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
		</CustomThemeContext.Provider>
	);
};

export default CustomThemeProvider;
