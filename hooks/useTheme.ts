import { useContext } from 'react';

import { CustomThemeContext } from '../src/contexts/CustomThemeProvider';

const useTheme = () => useContext(CustomThemeContext);

export default useTheme;
