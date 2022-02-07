const path = require("path");
exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "components"),
        "@pages": path.resolve(__dirname, "pages"),
        "@Types": path.resolve(__dirname, "types"),
        "@styles": path.resolve(__dirname, "styles"),
        "@images": path.resolve(__dirname, "images"),
        "@images": path.resolve(__dirname, "images"),
        "@graphql": path.resolve(__dirname, "graphql"),
      },
    },
  });
};
