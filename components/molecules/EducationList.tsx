import { EDUCATION } from '../../data/about';
import { List } from '../atoms/list/List';
import EducationItem from './EducationItem';

const EducationList = function () {
	return (
		<List>
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
		</List>
	);
};

export default EducationList;
