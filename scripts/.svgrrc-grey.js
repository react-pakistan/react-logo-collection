module.exports = {
  icon: true,
  svgoConfig: {
    plugins: [
      {
        name: 'removeViewBox',
        active: false,
      },
      {
        name: 'removeAttrs',
        active: false,
        params: {
          attrs: ["fill"],
        },
      },
    ],
  },
};
