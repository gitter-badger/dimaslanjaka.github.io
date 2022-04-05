import 'js-prototypes';
import chalk from 'chalk';
import { cwd, dirname, existsSync, join, readFileSync } from '../../node/filemanager';
import { root } from '../../types/_config';

const logname = chalk.bgBlue.whiteBright('[include]');

/**
 * Process `shortcode include` to included in file, shortcode below:
 * ```html
 * <!-- include file.ext -->
 * ```
 * @param file
 * @param str
 * @returns
 */
export function parseShortCodeInclude(file: string, str: string) {
  const regex = /<!--\s+?include\s+?(.+?)\s+?-->/gim;
  const execs = Array.from(str.matchAll(regex));
  //console.log('executor', execs.length, 'total');
  if (execs.length) {
    execs.forEach((m) => {
      const htmlTag = m[0];
      const file = m[1];
      const dirs = {
        directFile: join(dirname(file.toString()), file),
        cwdFile: join(cwd(), file),
        rootFile: join(root, file),
      };
      for (const key in dirs) {
        if (Object.prototype.hasOwnProperty.call(dirs, key)) {
          const file = dirs[key];
          if (existsSync(file)) {
            console.log(logname + chalk.greenBright(`[${key}]`), file);
            const read = readFileSync(file).toString();
            str = str.replace(htmlTag, read);
            break;
          }
        }
      }
    });
  }
  return str;

  /*
  let m: RegExpExecArray;
  const found = false;
  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    const allmatch = m[0];
    const bracketmatch = m[1];


    /*if (existsSync(directFile)) {
      // search from file directory
      console.info(logname + chalk.greenBright('[direct]'), directFile);
      const directRead = readFileSync(directFile).toString();
      str = str.replace(allmatch, directRead);
      found = true;
    } else if (existsSync(cwdFile)) {
      // search from workspace directory
      console.log(logname + chalk.greenBright('[root]'), cwdFile);
      console.info(`${logname} found from direct ${cwdFile}`);
      const rootRead = readFileSync(cwdFile).toString();
      str = str.replace(allmatch, rootRead);
      found = true;
    } else {
      console.error(chalk.redBright('[include][error]'), "couldn't find any file from root", cwdFile);
      console.error(chalk.redBright('[include][error]'), "couldn't find any file from direct", directFile);
      console.log(chalk.redBright('[include][error]'), chalk.magenta('1'), dirname(file.toString()));
      console.log(chalk.redBright('[include][error]'), chalk.magenta('2'), bracketmatch);
      console.log(chalk.redBright('[include][error]'), chalk.magenta('3'), join(dirname(file), bracketmatch));
    }
  }
  // match shortcode and found otherwise repeat
  if (found && str.match(regex)) return parseShortCodeInclude(file, str);
  */

  return str;
}
export default parseShortCodeInclude;
