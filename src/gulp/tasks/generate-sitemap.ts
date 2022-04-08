import Sitemap from '../../node/cache-sitemap';
import GoogleNewsSitemap, { ClassItemType } from 'google-news-sitemap/src';
import Bluebird from 'bluebird';
import { join, write } from '../../node/filemanager';
import config, { root } from '../../types/_config';
import gulp from 'gulp';

export default function generateGoogleNewsSitemap() {
  const pages = new Sitemap();
  const map = new GoogleNewsSitemap();

  return Bluebird.all(pages.getValues())
    .map((item) => {
      const val: ClassItemType = {
        publication_name: item.author,
        publication_language: item.lang || 'en',
        publication_date: item.date,
        title: item.title,
        location: item.location || '',
      };
      return map.add(val);
    })
    .then((i) => {
      console.log('total pages', i.length);
      write(join(root, config.public_dir, 'sitemap-news.xml'), map.toString()).then(console.log);
    });
}

gulp.task('generate:gn-sitemap', generateGoogleNewsSitemap);
