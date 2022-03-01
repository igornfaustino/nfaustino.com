import { format, parseISO } from "date-fns";
import Link from "next/link";
import styled from "styled-components";

import { PostMetadata } from "../../lib/post";
import { ItemDescription } from "../atoms/list/ItemDescription";
import { ItemTitle } from "../atoms/list/ItemTitle";
import { LinkListItem } from "../atoms/list/LinkListItem";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const DateTime = styled.span`
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
`;

type Props = {
  post: PostMetadata;
};

const PostItem = function (props: Props) {
  const { post } = props;

  const formattedDate = format(parseISO(post.date), "LLL dd, yyyy");

  return (
    <Link href={`/${post.slug}`} passHref>
      <LinkListItem>
        <TitleWrapper>
          <ItemTitle>{post.title}</ItemTitle>
          <DateTime>
            {formattedDate} · {post.readingTime} min read
          </DateTime>
        </TitleWrapper>
        <ItemDescription>{post.description}</ItemDescription>
      </LinkListItem>
    </Link>
  );
};

export default PostItem;
