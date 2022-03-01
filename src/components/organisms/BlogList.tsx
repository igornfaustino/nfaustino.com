import { AllPostsQuery } from "../../generated/graphql";
import { List } from "../atoms/list/List";
import PostItem from "../molecules/PostItem";

type Post = AllPostsQuery["posts"][0] & { readingTime: number };

export const BlogList = function ({ posts }: { posts: Post[] }) {
  return (
    <List>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </List>
  );
};

export default BlogList;
