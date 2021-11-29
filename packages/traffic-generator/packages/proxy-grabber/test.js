const proxyGrabber = require('.');
const dbProxy = require('.').db;
const path = require('path');
//const grabber = new proxyGrabber();
//grabber.test();

const db = new dbProxy(path.join(__dirname, 'databases'));
if (!db.exists('/test')) {
  db.push('/test/string', 'string db');
  db.push('/test/number', parseInt(Math.random()));
  db.push('/test/float', parseFloat(Math.random()));
  db.push('/test/object', { key: 'value' });
  db.push('/test/array', ['satu', 'dua', 'tiga']);
}

console.log(
  db.get('/test/array'),
  db.get('/test/object'),
  db.get('/test/number'),
  db.get('/test/float'),
  db.get('/test/string'),
);
