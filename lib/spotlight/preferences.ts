export const generatePreferenceActions = (changeTheme: (theme: 'dark' | 'light') => () => void) => [
  {
    id: 'change theme',
    name: 'Change theme...',
    keywords: 'theme',
    section: 'preferences',
  },
  {
    id: 'Dark theme',
    name: 'Dark',
    parent: 'change theme',
    keywords: 'dark theme',
    perform: changeTheme('dark'),
  },
  {
    id: 'light theme',
    name: 'Light',
    parent: 'change theme',
    keywords: 'dark theme',
    perform: changeTheme('light'),
  },
];
