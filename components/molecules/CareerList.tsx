import { JOBS } from '../../data/about';
import { List } from '../atoms/list/List';
import CareerItem from './CareerItem';

const CareerList = function () {
	return (
		<List>
			{JOBS.map((job) => (
				<CareerItem
					key={`${job.company}-${job.position}`}
					position={job.position}
					company={job.company}
					link={job.link}
					location={job.location}
					start={job.start}
					end={job.end}
				/>
			))}
		</List>
	);
};

export default CareerList;
