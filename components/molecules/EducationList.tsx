import styled from 'styled-components';

import { EDUCATION } from '../../data/about';
import EducationItem from './EducationItem';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin-bottom: 16px;
`;

const EducationList = function () {
	return (
		<Wrapper>
			{EDUCATION.map((education) => (
				<EducationItem
					key={`${education.school}-${education.course}`}
					course={education.course}
					school={education.school}
					location={education.location}
					startYear={education.startYear}
					endYear={education.endYear}
				/>
			))}
		</Wrapper>
	);
};

export default EducationList;
