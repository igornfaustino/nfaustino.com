import { AllPostsQuery } from "../../generated/graphql";

export const generatePostActions = (posts: AllPostsQuery['posts'], redirect: (path: string) => () => void) => [
  {
    id: 'posts',
    name: 'Search blog post...',
    keywords: 'posts blog',
    section: 'Posts',
  },
  ...posts.map(({ title, description, slug }) => ({
    id: slug,
    name: title,
    keywords: description,
    parent: 'posts',
    perform: redirect(`/${slug}`),
  })),
]
