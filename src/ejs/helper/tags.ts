import { parsePostReturn } from '../../markdown/transformPosts';
import { join } from '../../node/filemanager';
import config from '../../types/_config';
const tag_dir = config.tag_dir;

interface Tags {
  /**
   * Tag name
   */
  name: string;
  /**
   * Tag path
   */
  path: string;
  /**
   * Tag url
   */
  url: string;
}
const homepage = new URL(config.url);
/**
 * list tag of page
 * @param page page object
 * @returns array of tags
 * @example
 * ```html
 * <% tags(page).forEach(tag => { %>
 * tag url: <%- tag.url %>
 * tag name: <%- tag.name %>
 * tag pathname: <%- tag.pathname %>
 * <% }) %>
 * ```
 */
export function tags(page: parsePostReturn) {
  const result: Tags[] = [];
  const target = page.tags || page.metadata.tags;
  if (Array.isArray(target)) {
    target.forEach((tag) => {
      homepage.pathname = join(tag_dir, tag);
      result.push({ name: tag, path: homepage.pathname, url: homepage.toString() });
    });
  }
  return result;
}
