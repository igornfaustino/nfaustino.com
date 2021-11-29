import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

type Props = {
	children: string;
};

const Cursor = styled(motion.span)`
	border-right: solid 7px ${({ theme }) => theme.colors.textColor};
	margin-left: 2px;
`;

const TypeWriterText = function (props: Props) {
	const { children } = props;

	const [displayText, setDisplayText] = useState('');
	const duration = 15;

	const typeLetter = (tokens: string[]) => {
		const nextLetter = tokens.shift();
		setDisplayText((prev) => `${prev}${nextLetter}`);

		if (tokens.length) {
			setTimeout(() => typeLetter(tokens), duration);
		}
	};

	useEffect(() => {
		const textTokens = children.split('');
		setTimeout(() => typeLetter(textTokens), duration);
	}, []);

	return (
		<p>
			{displayText}{' '}
			<Cursor
				animate={{ opacity: [0, 1, 0] }}
				transition={{ repeat: Infinity, duration: 1.5 }}
			/>
		</p>
	);
};

export default TypeWriterText;
