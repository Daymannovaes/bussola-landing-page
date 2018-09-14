const { readdirSync } = require('fs');
const { promisify } = require('util');

const PAGES_DIR = './pages';
function getPages() {
    const files = readdirSync(PAGES_DIR);
    console.log(files);
    return files;
}

module.exports = {
  publicRuntimeConfig: {
      pages: getPages()
  }
}
