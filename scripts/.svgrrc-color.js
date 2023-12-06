module.exports = {
  icon: true,
  svgoConfig: {
    typescript: true,
    plugins: [
      {
        name: 'removeViewBox',
        active: false,
      },
    ],
  },
};
