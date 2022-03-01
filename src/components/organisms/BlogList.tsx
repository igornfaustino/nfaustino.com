import { PostMetadata } from "../../../lib/post";
import { List } from "../atoms/list/List";
import PostItem from "../molecules/PostItem";

export const BlogList = function ({ posts }: { posts: PostMetadata[] }) {
  return (
    <List>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </List>
  );
};

export default BlogList;
