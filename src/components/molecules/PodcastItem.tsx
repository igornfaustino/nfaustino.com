import { ItemDescription } from '../atoms/list/ItemDescription';
import { ItemTitle } from '../atoms/list/ItemTitle';
import { LinkListItem } from '../atoms/list/LinkListItem';

type Props = { title: string; description: string; link: string };

const PodcastItem = function ({ title, description, link }: Props) {
	return (
		<LinkListItem target="_blank" href={link}>
			<ItemTitle>{title}</ItemTitle>
			<ItemDescription dangerouslySetInnerHTML={{ __html: description }} />
		</LinkListItem>
	);
};

export default PodcastItem;
