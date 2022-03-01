import { GetServerSideProps } from "next";

import { client } from "../lib/urql";
import { AllPostsDocument, AllPostsQuery } from "../generated/graphql";

const EXTERNAL_DATA_URL = "https://nfaustino.com";

type PostSlug = { slug: string };

const generatePostsMap = (posts: PostSlug[]) =>
  posts
    .map(
      ({ slug }) => `
 <url>
     <loc>${`${EXTERNAL_DATA_URL}/${slug}`}</loc>
 </url>
`
    )
    .join("");

function generateSiteMap(posts: PostSlug[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
     </url>
     <url>
        <loc>${EXTERNAL_DATA_URL}/about</loc>
     </url>
     <url>
        <loc>${EXTERNAL_DATA_URL}/blog</loc>
     </url>
		 <url>
        <loc>${EXTERNAL_DATA_URL}/projects</loc>
     </url>
     <url>
        <loc>${EXTERNAL_DATA_URL}/podcast</loc>
     </url>
     ${generatePostsMap(posts)}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { data } = await client
    .query<AllPostsQuery>(AllPostsDocument)
    .toPromise();
  const posts = data?.posts || [];

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
