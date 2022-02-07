const path = require("path");
exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "components"),
        "@pages": path.resolve(__dirname, "pages"),
        "@types": path.resolve(__dirname, "types"),
        "@styles": path.resolve(__dirname, "styles"),
        "@images": path.resolve(__dirname, "images"),
      },
    },
  });
};
