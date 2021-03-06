module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
          node: 'current',
        },
        modules: false,
      },
    ],
  ];

  const plugins = [
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-syntax-dynamic-import',
    ['transform-imports', {}],
  ];

  return {
    presets,
    plugins,
  };
};
