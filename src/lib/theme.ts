type availableThemes = 'dark' | 'light';

export const getCurrentThemeFromStore = (): availableThemes => {
	const theme = localStorage.getItem('theme');
	if (!theme) return 'light';
	return theme as availableThemes;
};

export const saveThemeOnStore = (theme: availableThemes) => {
	localStorage.setItem('theme', theme);
};
