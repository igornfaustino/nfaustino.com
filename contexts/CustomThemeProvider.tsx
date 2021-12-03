import {
	useCallback,
	useMemo,
	useState,
	createContext,
	FC,
	useEffect,
} from 'react';

import { ThemeProvider } from 'styled-components';

import * as gtag from '../lib/gtag';
import { getCurrentThemeFromStore, saveThemeOnStore } from '../lib/theme';
import { darkTheme, lightTheme } from '../styles/theme';

type Context = {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
	// eslint-disable-next-line no-unused-vars
	setTheme: (theme: 'light' | 'dark') => void;
};

export const CustomThemeContext = createContext<Context>({
	theme: 'light',
	toggleTheme: () => {},
	setTheme: () => {},
});

const CustomThemeProvider: FC = function ({ children }) {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	const toggleTheme = useCallback(() => {
		setTheme((prevTheme) => {
			const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
			gtag.event({
				action: 'toggleTheme',
				label: 'Change site theme',
				category: 'personalization',
				value: newTheme,
			});
			saveThemeOnStore(newTheme);
			return newTheme;
		});
	}, []);

	const contextValue = useMemo(
		() => ({ theme, toggleTheme, setTheme }),
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
