const pluginTOC = require('eleventy-plugin-toc');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('default', 'layouts/default.pug');
    eleventyConfig.addPassthroughCopy({ '_assets/img': 'assets/img' });
    eleventyConfig.setLibrary('md', markdownIt().use(markdownItAnchor));
    eleventyConfig.addPlugin(pluginTOC);
    global.filters = eleventyConfig.javascriptFunctions;
    eleventyConfig.setPugOptions({
        debug: false,
        globals: ['filters']
    });
};