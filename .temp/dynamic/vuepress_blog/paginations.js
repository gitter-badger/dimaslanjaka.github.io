/**
 * Generated by "@vuepress/plugin-blog"
 */

import sorters from './pageSorters'
import filters from './pageFilters'

export default [{
  pid: "post",
  id: "post",
  filter: filters.post,
  sorter: sorters.post,
  pages: [{"path":"/","interval":[0,4]},{"path":"/page/2/","interval":[5,9]},{"path":"/page/3/","interval":[10,11]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "tag",
  id: "frontmatter",
  filter: filters.tag,
  sorter: sorters.tag,
  pages: [{"path":"/tag/frontmatter/","interval":[0,3]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "tag",
  id: "vuepress",
  filter: filters.tag,
  sorter: sorters.tag,
  pages: [{"path":"/tag/vuepress/","interval":[0,4]},{"path":"/tag/vuepress/page/2/","interval":[5,9]},{"path":"/tag/vuepress/page/3/","interval":[10,11]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "tag",
  id: "markdown",
  filter: filters.tag,
  sorter: sorters.tag,
  pages: [{"path":"/tag/markdown/","interval":[0,4]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "tag",
  id: "theme",
  filter: filters.tag,
  sorter: sorters.tag,
  pages: [{"path":"/tag/theme/","interval":[0,4]}],
  prevText: "Prev",
  nextText: "Next",
},
{
  pid: "tag",
  id: "blog",
  filter: filters.tag,
  sorter: sorters.tag,
  pages: [{"path":"/tag/blog/","interval":[0,4]}],
  prevText: "Prev",
  nextText: "Next",
}]