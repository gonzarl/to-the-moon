import rss, {pagesGlobToRssItems} from '@astrojs/rss'

export async function GET(context){
    return rss({
        title: 'GonchoJs blog',
        description: 'My travel learning ASTRO',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`
    })
}