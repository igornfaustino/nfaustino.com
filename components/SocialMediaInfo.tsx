import { motion } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	gap: 32px;
`;

const Links = styled(motion.a)`
	cursor: pointer;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.textColor};

	padding-bottom: 4px;
	border-bottom: 1px solid transparent;

	:hover {
		border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
	}
`;

const hoverAnimation = {
	scale: 1.1,
};

const SocialMediaInfo = function () {
	return (
		<Wrapper>
			<Links
				whileHover={hoverAnimation}
				href="https://github.com/igornfaustino/nfaustino.com"
				target="_blank"
			>
				Source
			</Links>
			<Links
				whileHover={hoverAnimation}
				href="https://www.linkedin.com/in/igornfaustino"
				target="_blank"
			>
				Linkedin
			</Links>
			<Links
				whileHover={hoverAnimation}
				href="https://github.com/igornfaustino"
				target="_blank"
			>
				Github
			</Links>
			<Links
				whileHover={hoverAnimation}
				href="https://twitter.com/igornfaustino"
				target="_blank"
			>
				Twitter
			</Links>
		</Wrapper>
	);
};

export default SocialMediaInfo;
