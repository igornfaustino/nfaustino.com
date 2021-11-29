import { useContext } from 'react';

import { CustomThemeContext } from '../contexts/CustomThemeProvider';

const useTheme = () => useContext(CustomThemeContext);

export default useTheme;
