const path = require("path");
const createStyledComponentsTransformer = require("typescript-plugin-styled-components").default;

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, "../src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {
              configFileName : "tsconfig.storybook.json",
              getCustomTransformers: () => ({ before: [
                createStyledComponentsTransformer({
                  getDisplayName: (filename, bindingName) => `${bindingName}`,
                }),
              ] }),
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "../src/an-intro"),
        use: [
          require.resolve("ts-loader"),
          require.resolve("react-docgen-typescript-loader"),
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
        include: path.resolve(__dirname, "../"),
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
        include: path.resolve(__dirname, "../"),
      },
    ],
  },
};
