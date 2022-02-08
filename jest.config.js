module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest/jest.setup.js"],
  transform: {
    "\\.svg": "<rootDir>/jest/svgTransform.js",
    "^.+\\.[jt]sx?$": "<rootDir>/jest/jest-preprocess.js",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.svg": `<rootDir>/jest/svgTransform.js`,
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^compose(.*)$": "<rootDir>/src/compose$1",
    "^@gql(.*)$": "<rootDir>/src/gql$1",
    "^@images(.*)$": "<rootDir>/src/images$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^stores(.*)$": "<rootDir>/src/stores$1",
    "^@styles(.*)$": "<rootDir>/src/styles$1",
    "^@graphql(.*)$": "<rootDir>/src/graphql$1",
    "^utils(.*)$": "<rootDir>/src/utils$1",
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  moduleDirectories: ["node_modules", "src"],
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
};

const { compilerOptions } = require("./tsconfig.json");
const { pathsToModuleNameMapper } = require("ts-jest/utils");
const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: "<rootDir>/",
});
