module.exports = {
  icon: true,
  svgoConfig: {
    plugins: [
      {
        removeViewBox: false,
      },
      // {
      //   removeAttrs: {
      //     attrs: ["fill"],
      //   },
      // },
    ],
  },
};
