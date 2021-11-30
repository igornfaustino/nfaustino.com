import styled from 'styled-components';

import CareerItem from './CareerItem';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	margin-bottom: 16px;
`;

const JOBS = [
	{
		position: 'Front-end Developer',
		company: 'aftersale',
		link: 'https://after.sale',
		location: 'Curitiba, Brazil',
		start: '2020-09-01',
	},
	{
		position: 'Fullstack Developer',
		company: 'Smarppy',
		link: 'https://smarppy.com/',
		location: 'Campo Mourão, Brazil',
		start: '2019-05-01',
		end: '2019-08-31',
	},
	{
		position: 'Fullstack Developer',
		company: 'Haken',
		link: 'http://hakenej.com/',
		location: 'Campo Mourão, Brazil',
		start: '2017-03-01',
		end: '2018-11-30',
	},
];

const CareerList = function () {
	return (
		<Wrapper>
			{JOBS.map((job) => (
				<CareerItem
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
