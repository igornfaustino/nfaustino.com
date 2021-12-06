import { GetServerSideProps } from 'next';

import { getAllPostsMetadata, PostMetadata } from '../lib/post';

const EXTERNAL_DATA_URL = 'https://nfaustino.com';

const generatePostsMap = (posts: PostMetadata[]) =>
	posts
		.map(
			({ slug }) => `
 <url>
     <loc>${`${EXTERNAL_DATA_URL}/${slug}`}</loc>
 </url>
`
		)
		.join('');

function generateSiteMap(posts: PostMetadata[]) {
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://nfaustino.com</loc>
     </url>
     <url>
        <loc>https://nfaustino.com/about</loc>
     </url>
     <url>
        <loc>https://nfaustino.com/blog</loc>
     </url>
     ${generatePostsMap(posts)}
   </urlset>
 `;
}

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const posts = getAllPostsMetadata();

	// We generate the XML sitemap with the posts data
	const sitemap = generateSiteMap(posts);

	res.setHeader('Content-Type', 'text/xml');
	// we send the XML to the browser
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default SiteMap;
