import { format, parseISO, intervalToDuration, formatDuration } from 'date-fns';
import styled from 'styled-components';

import HyperLink from './HipperLink';

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

	const formattedStart = format(parseISO(start), 'MMM yyyy');
	const formattedEnd = end ? format(parseISO(end), 'MMM yyyy') : 'Present';

	const duration = intervalToDuration({
		start: parseISO(start),
		end: end ? parseISO(end) : new Date(),
	});

	duration.months =
		(duration.days || 0) > 20 ? duration.months! + 1 : duration.months;

	const formattedDuration = formatDuration(duration, {
		format: ['years', 'months'],
	});

	return (
		<div>
			<Title>
				<Position>{position}</Position> at{' '}
				<HyperLink href={link} target="_blank" rel="noreferrer">
					{company}
				</HyperLink>{' '}
			</Title>
			{location}
			<br />
			{formattedStart} - {formattedEnd} . {formattedDuration}
		</div>
	);
};

export default CareerItem;
