import { motion, TargetAndTransition, VariantLabels } from 'framer-motion';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import styled from 'styled-components';

import useTheme from '../../hooks/useTheme';
import { handleEnterKeyPress } from '../../lib/keyup';

const Wrapper = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const tapAnimation: VariantLabels | TargetAndTransition = {
	rotate: 180,
	scale: 2,
};

const ThemeSwitcher = function () {
	const { toggleTheme, theme } = useTheme();

	if (theme === 'light')
		return (
			<Wrapper
				whileTap={tapAnimation}
				onClick={toggleTheme}
				role="button"
				onKeyUp={handleEnterKeyPress(toggleTheme)}
				tabIndex={0}
			>
				<RiMoonLine size="1.2rem" />
			</Wrapper>
		);

	return (
		<Wrapper
			whileTap={tapAnimation}
			onClick={toggleTheme}
			role="button"
			onKeyUp={handleEnterKeyPress(toggleTheme)}
			tabIndex={0}
		>
			<RiSunLine size="1.2rem" />
		</Wrapper>
	);
};

export default ThemeSwitcher;
