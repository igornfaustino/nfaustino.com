import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	gap: 32px;
`;

const Links = styled.a`
	cursor: pointer;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.textColor};
`;

const SocialMediaInfo = function () {
	return (
		<Wrapper>
			<Links
				href="https://github.com/igornfaustino/nfaustino.com"
				target="_blank"
			>
				Source
			</Links>
			<Links href="https://www.linkedin.com/in/igornfaustino" target="_blank">
				Linkedin
			</Links>
			<Links href="https://github.com/igornfaustino" target="_blank">
				Github
			</Links>
			<Links href="https://twitter.com/igornfaustino" target="_blank">
				Twitter
			</Links>
		</Wrapper>
	);
};

export default SocialMediaInfo;
