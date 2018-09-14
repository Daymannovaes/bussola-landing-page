const { readdirSync } = require('fs');
const { promisify } = require('util');

const PAGES_DIR = './pages';
function getPages() {
    const files = readdirSync(PAGES_DIR);
    return files
        .filter(file => file.match(/\.js$/));
}

module.exports = {
  publicRuntimeConfig: {
      pages: getPages()
  }
}
