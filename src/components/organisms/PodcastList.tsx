import { List } from '../atoms/list/List';
import PodcastItem from '../molecules/PodcastItem';

type Props = {
	episodes: {
		title: string;
		description: string;
		link: string;
	}[];
};

export const PodcastList = function ({ episodes }: Props) {
	return (
		<List>
			{episodes.map(({ title, description, link }) => (
				<PodcastItem
					key={link}
					title={title}
					description={description}
					link={link}
				/>
			))}
		</List>
	);
};
