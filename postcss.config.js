module.exports = (ctx) => {
  const plugins = {
    autoprefixer: {
      ...ctx.options.autoprefixer
    },
  };

  return { plugins };
};
