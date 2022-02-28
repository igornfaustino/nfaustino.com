import styled from 'styled-components';

import { ItemDescription } from '../atoms/list/ItemDescription';
import { ItemTitle } from '../atoms/list/ItemTitle';
import { ListItem } from '../atoms/list/ListItem';

const Position = styled.span`
	text-transform: uppercase;
	font-size: 18px;
`;

type Props = {
	course: string;
	school: string;
	location: string;
	startYear: string;
	endYear?: string;
};

const EducationItem = function (props: Props) {
	const { course, school, location, startYear, endYear } = props;

	return (
		<ListItem>
			<ItemTitle>
				<Position>{course}</Position> at {school}
			</ItemTitle>
			<ItemDescription>
				{location}
				<br />
				{startYear} - {endYear || 'Present'}
			</ItemDescription>
		</ListItem>
	);
};

export default EducationItem;
