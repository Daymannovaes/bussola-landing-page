const markdown = require('markdown').markdown;
const md = require('./content.json');

module.exports = {
  exportPathMap: async function (defaultPathMap) {
      console.log(md);
      return Object.assign({}, {
          '/about': { page: '/', query: { title: 'About Page', content: markdown.toHTML(md.content) } }
      });
  }
};

