/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as author from './helper/author';
import * as date from './helper/date';
import * as ejs from '';
import * as locale from './helper/locales';
import * as thumbnail from './helper/thumbnail';
import * as keywords from './helper/keywords';

interface DynamicObject {
  [keys: string]: any;
}
type helper_types = typeof keywords | typeof thumbnail | typeof locale | typeof author | typeof date | DynamicObject;
let helpers: helper_types = {
  iif: function <T>(cond: boolean, value: T): T {
    if (cond) return value;
  },
};
[author, date, locale, thumbnail, keywords].forEach((obj) => {
  helpers = Object.assign(helpers, obj);
});

interface EJSOption extends ejs.Options, DynamicObject {
  _?: typeof helpers;
}

function renderFile(file: string, opts: EJSOption = {}) {
  opts._ = helpers;
  opts = Object.assign(helpers, opts);
  return ejs.renderFile(file, opts);
}

const ejs_object: typeof ejs = {
  renderFile: renderFile,
  resolveInclude: ejs.resolveInclude,
  compile: ejs.compile,
  render: ejs.render,
  clearCache: ejs.clearCache,
  escapeXML: ejs.escapeXML,
  VERSION: ejs.VERSION,
  name: ejs.name,
  cache: ejs.cache,
  fileLoader: ejs.fileLoader,
  localsName: ejs.localsName,
  openDelimiter: ejs.openDelimiter,
  closeDelimiter: ejs.closeDelimiter,
  delimiter: ejs.delimiter,
  promiseImpl: ejs.promiseImpl,
  Template: ejs.Template,
};

export default ejs_object;
