import styled from 'styled-components';

import { JOBS } from '../data/about';
import CareerItem from './CareerItem';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin-bottom: 16px;
`;

const CareerList = function () {
	return (
		<Wrapper>
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
		</Wrapper>
	);
};

export default CareerList;
