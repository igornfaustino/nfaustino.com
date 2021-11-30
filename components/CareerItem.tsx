import styled from 'styled-components';

import HipperLink from './HipperLink';

const Title = styled.h3`
	margin: 4px 0;
	font-size: 16px;
`;

const Position = styled.span`
	text-transform: uppercase;
	font-size: 18px;
`;

type Props = {
	position: string;
	company: string;
	link: string;
	location: string;
	start: string;
	end?: string;
};

const CareerItem = function (props: Props) {
	const { position, company, location, start, link, end = null } = props;
	return (
		<>
			<Title>
				<Position>{position}</Position> at{' '}
				<HipperLink href={link} target="_blank" rel="noreferrer">
					{company}
				</HipperLink>{' '}
			</Title>
			{location}
			<br />
			{start} - {end || 'Present'} . 1 yr 3 mos
		</>
	);
};

export default CareerItem;
