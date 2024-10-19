import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
    { url: '/portfolio', changefreq: 'daily', priority: 1.0 },
    { url: '/portfolio/#/about', changefreq: 'weekly', priority: 0.7 },
    { url: '/portfolio/#/stacks', changefreq: 'weekly', priority: 0.7 },
    { url: '/portfolio/#/projects', changefreq: 'weekly', priority: 0.7 },
    { url: '/portfolio/#/contact', changefreq: 'weekly', priority: 0.7 },
];

const sitemapStream = new SitemapStream({ hostname: 'https://manitra-rasolofoarimanga.github.io' });

streamToPromise(sitemapStream).then((data) => {
    createWriteStream('./public/sitemap.xml').write(data);
});

links.forEach(link => sitemapStream.write(link));
sitemapStream.end();