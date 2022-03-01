import 'styled-components';
import { ThemeType } from './src/styles/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType { }
}
