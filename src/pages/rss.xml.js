import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/consts";

export async function GET(context) {
  const posts = await getCollection("specials");
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: sortedPosts.map((post) => ({
      link: `/specials/${post.slug}/`,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
    })),
  });
}
