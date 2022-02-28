/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react';

import styled from 'styled-components';

const ImgWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Img = styled.img`
	height: 100%;
	max-width: 100%;
`;

const CenteredImage: FC = function (props) {
	return (
		<ImgWrapper>
			<Img {...props} />
		</ImgWrapper>
	);
};

export default CenteredImage;
