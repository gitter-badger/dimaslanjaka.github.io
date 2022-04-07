import chalk from 'chalk';
import { cacheDir, existsSync, join, mkdirSync, readFileSync, resolve, write } from './filemanager';
import logger from './logger';
import { md5, md5FileSync } from './md5-file';
import scheduler from './scheduler';
import { serialize, unserialize } from 'php-serialize';
import { rm } from 'fs';

interface Objek {
  [key: string]: any;
}
export const dbFolder = resolve(cacheDir);
export interface CacheOpt {
  /**
   * immediately save cache value
   * * default false
   */
  sync?: boolean;
  /**
   * root/folder to save entire databases
   * * default node_modules/.cache/dimaslanjaka
   */
  folder?: string;
}

/**
 * @summary IN FILE CACHE.
 * @description Save cache to file (not in-memory), cache will be restored on next process restart.
 */
export default class CacheFile {
  md5Cache: Objek = {};
  dbFile: string;
  static options: CacheOpt = {
    sync: false,
    folder: dbFolder,
  };
  private currentHash: string;
  constructor(hash = null, opt?: CacheOpt) {
    if (opt) CacheFile.options = Object.assign(CacheFile.options, opt);
    this.currentHash = hash;
    if (!hash) {
      const stack = new Error().stack.split('at')[2];
      hash = md5(stack);
    }
    if (!existsSync(CacheFile.options.folder)) mkdirSync(CacheFile.options.folder);
    this.dbFile = join(CacheFile.options.folder, 'db-' + hash);
    let db = existsSync(this.dbFile) ? readFileSync(this.dbFile, 'utf-8') : {};
    if (typeof db != 'object') {
      try {
        db = unserialize(db.toString());
      } catch (e) {
        logger.error('cache database lost');
        logger.error(e);
      }
    }
    if (typeof db == 'object') {
      this.md5Cache = db;
    }
  }
  clear() {
    return new Promise((resolve: (arg: Array<Error>) => any) => {
      const opt = { recursive: true, retryDelay: 3000, maxRetries: 3 };
      // delete current hash folders
      rm(join(CacheFile.options.folder, this.currentHash), opt, (e) => {
        // delete current hash db
        rm(this.dbFile, opt, (ee) => {
          resolve([e, ee]);
        });
      });
    });
  }
  setCache = (key: string, value: any) => this.set(key, value);
  /**
   * resolve long text on key
   */
  resolveKey(key: string) {
    // if key is file path
    if (existsSync(key)) return key;
    // if key is long text
    if (key.length > 32) {
      // search uuid
      const regex = /uuid:.*([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/gm;
      const m = regex.exec(key);
      if (m && typeof m[1] == 'string') return m[1];
      // return first 32 byte text
      return md5(key.substring(0, 32));
    }
    return key;
  }
  /**
   * locate ${CacheFile.options.folder}/${currentHash}/${unique key hash}
   * @param key
   * @returns
   */
  locateKey = (key: string) => join(CacheFile.options.folder, this.currentHash, md5(this.resolveKey(key)));
  dump(key?: string) {
    if (key) {
      return {
        resolveKey: this.resolveKey(key),
        locateKey: this.locateKey(key),
        db: this.dbFile,
      };
    }
  }
  set(key: string, value: any) {
    const self = this;
    // resolve key hash
    key = this.resolveKey(key);
    // locate key location file
    const locationCache = this.locateKey(key);
    // +key value
    this.md5Cache[key] = locationCache;

    // save cache on process exit
    scheduler.add('writeCacheFile-' + this.currentHash, () => {
      logger.log(chalk.magentaBright(self.currentHash), 'saved cache', self.dbFile);
      write(self.dbFile, serialize(self.md5Cache));
    });
    write(locationCache, serialize(value));
  }
  has(key: string): boolean {
    key = this.resolveKey(key);
    return typeof this.md5Cache[key] !== undefined;
  }
  /**
   * Get cache by key
   * @param key
   * @param fallback
   * @returns
   */
  get(key: string, fallback = null) {
    // resolve key hash
    key = this.resolveKey(key);
    // locate key location file
    const locationCache = this.locateKey(key);
    const Get = this.md5Cache[key];
    if (!Get) return fallback;
    if (existsSync(locationCache)) return unserialize(readFileSync(locationCache, 'utf-8'));
    return fallback;
  }
  getCache = (key: string, fallback = null) => this.get(key, fallback);
  /**
   * Check file is changed with md5 algorithm
   * @param path0
   * @returns
   */
  isFileChanged(path0: string): boolean {
    if (typeof path0 != 'string') {
      //console.log("", typeof path0, path0);
      return true;
    }
    try {
      // get md5 hash from path0
      const pathMd5 = md5FileSync(path0);
      // get index hash
      const savedMd5 = this.md5Cache[path0 + '-hash'];
      const result = savedMd5 != pathMd5;
      if (result) {
        // set, if file hash is not found
        this.md5Cache[path0 + '-hash'] = pathMd5;
      }
      return result;
    } catch (e) {
      return true;
    }
  }
}
