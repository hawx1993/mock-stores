const env = process.env.NODE_ENV;
const isDev = env === 'development';
// 自动引入mock目录下的js文件

const cache = {};
function importAll(r) {
  r.keys().forEach(function (key) {
      const fileName = key.split('/').pop().replace(/\..+$/, '');
      cache[fileName] = r(key)
  });
}

importAll(require.context('../../mock', true, /\.json|\.js$/));

const Store = isDev ? cache : ''

module.exports = Store;

