import styled from 'styled-components';

const Title = styled.h3`
	margin: 4px 0;
	font-size: 16px;
`;

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
		<div>
			<Title>
				<Position>{course}</Position> at {school}
			</Title>
			{location}
			<br />
			{startYear} - {endYear || 'Present'}
		</div>
	);
};

export default EducationItem;
