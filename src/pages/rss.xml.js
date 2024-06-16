import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Bek to the Future',
    description: "I'm embarking on a new adventure – pursuing my Master's in Information Technology. This blog will chronicle that journey, offering personal stories, coding accomplishments, and glimpses into the ever-evolving tech landscape.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}