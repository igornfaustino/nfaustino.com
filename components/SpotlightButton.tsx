import { motion, TargetAndTransition, VariantLabels } from 'framer-motion';
import { useKBar } from 'kbar';
import { RiSearchLine } from 'react-icons/ri';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const tapAnimation: VariantLabels | TargetAndTransition = {
	scale: 2,
};

const SpotlightButton = function () {
	const { query } = useKBar();

	return (
		<Wrapper
			whileTap={tapAnimation}
			onClick={query.toggle}
			role="button"
			onKeyUp={query.toggle}
			tabIndex={0}
		>
			<RiSearchLine size="1.2rem" />
		</Wrapper>
	);
};

export default SpotlightButton;
