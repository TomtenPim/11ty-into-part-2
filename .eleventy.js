module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css")
    eleventyConfig.addPassthroughCopy("src/images")

    eleventyConfig.addShortcode('image',function (src, alt, width, height, classList){
        return `<img src="${src}" alt="${alt}" classList"${classList}" width="${width}" height="${height}">`;
    });

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};