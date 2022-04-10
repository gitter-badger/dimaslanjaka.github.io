import fs from 'fs';
import path from 'path';
import * as fse from 'fs-extra';

//console.log(loopDir(path.join(process.cwd(), "source")));
/**
 * Loop dir recursive
 * @param destDir
 * @param debug
 */
export function loopDir(destDir: fs.PathLike | string, debug = false) {
  if (!fs.lstatSync(destDir).isDirectory()) {
    if (debug) console.error(destDir + " isn't folder");
    return;
  }

  let result: string[] = [];

  const readDir = fs.readdirSync(destDir);
  if (readDir) {
    if (debug) console.log(readDir.length + ' files to process');
    readDir.forEach(function (file) {
      const absolute = path.join(destDir.toString(), file);
      if (fs.statSync(absolute).isDirectory()) {
        result = loopDir(absolute).concat(result);
      } else {
        result.push(absolute);
      }
    });
  }

  return result;
}

// eslint-disable-next-line no-unused-vars
export function copyDir(
  source: string,
  dest: string,
  callback = function (err: any | null) {
    if (err) {
      console.error(err);
      console.error('error');
    } else {
      console.log('success!');
    }
  }
) {
  return fse.copy(source, dest, callback);
}

/**
 * slash alternative
 * ```bash
 * npm i slash #usually
 * ```
 * @url {@link https://github.com/sindresorhus/slash}
 * @param path
 */
export function slash(path: string) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(path); // eslint-disable-line no-control-regex

  if (isExtendedLengthPath || hasNonAscii) {
    return path;
  }

  return path.replace(/\\/g, '/');
}

/**
 * check variable is empty, null, undefined, object/array length 0, number is 0
 * @param data
 * @returns
 */
export const isEmpty = (data: any) => {
  if (data === null) return true;
  if (typeof data === 'string' && data.trim().length === 0) return true;
  if (typeof data === 'undefined') return true;
  if (typeof data === 'number') {
    if (data === 0) return true;
  }
  if (typeof data === 'object') {
    if (Array.isArray(data) && data.length === 0) return true;
    if (data.constructor === Object && Object.keys(data).length === 0) return true;
  }
  return false;
};
