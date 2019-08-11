// const path = require("path");
// const createStyledComponentsTransformer = require("typescript-plugin-styled-components").default;

// // Export a function. Accept the base config as the only param.
// module.exports = async ({ config, mode }) => {
//   // `mode` has a value of "DEVELOPMENT" or "PRODUCTION"
//   // You can change the configuration based on that.
//   // "PRODUCTION" is used when building the static version of storybook.

//   // Make whatever fine-grained changes you need
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     include: path.resolve(__dirname, "../src"),
//     exclude: /node_modules/,
//     use: [
//       {
//         loader: "awesome-typescript-loader",
//         options: {
//           configFileName: "tsconfig.storybook.json",
//           getCustomTransformers: () => ({ before: [
//             createStyledComponentsTransformer({
//               getDisplayName: (filename, bindingName) => `${path.basename(filename)}`,
//             }),
//           ] }),
//         }
//       }
//     ],
//   });
//   config.module.rules.push({
//     test: /\.scss$/,
//     use: ["style-loader", "css-loader", "sass-loader"],
//     include: path.resolve(__dirname, "../"),
//   });

//   // Return the altered config
//   return config;
// };

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
                  getDisplayName: (filename, bindingName) => `${path.basename(filename)}__${bindingName}`,
                }),
              ] }),
            },
          },
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
