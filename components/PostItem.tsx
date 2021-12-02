import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';

import { PostMetadata } from '../lib/post';

const Wrapper = styled.a`
	cursor: pointer;
	padding: 8px;
	border-radius: 3px;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.textColor};
	transition: all 200ms;

	:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
`;

const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 576px) {
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
`;

const Title = styled.h3`
	margin: 0;
`;

const Description = styled.p`
	margin: 0;
	opacity: 0.6;
	text-overflow: ellipsis;
	overflow: hidden;
	display: -webkit-box !important;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	white-space: normal;
	font-size: 14px;
`;

const DateTime = styled.span`
	font-size: 12px;
	font-weight: bold;
`;

type Props = {
	post: PostMetadata;
};

const PostItem = function (props: Props) {
	const { post } = props;

	const formattedDate = format(parseISO(post.date), 'LLL dd, yyyy');

	return (
		<Link href={`/${post.slug}`} passHref>
			<Wrapper>
				<TitleWrapper>
					<Title>{post.title}</Title>
					<DateTime>
						{formattedDate} · {post.readingTime} min read
					</DateTime>
				</TitleWrapper>
				<Description>{post.description}</Description>
			</Wrapper>
		</Link>
	);
};

export default PostItem;
