module.exports = (api) => {
  const env = api.env() // 'development' | 'production' | 'test'

  const presets = [
    [
      '@babel/env',
      {
        debug: true,
        corejs: 3,
        modules: false,
        targets: [
          '> 1%',
          'last 2 Chrome major versions',
          'last 2 Firefox major versions',
          'last 2 Edge major versions',
          'last 2 Safari major versions',
          'not IE > 0',
          'not op_mini all',
        ],
        useBuiltIns: 'usage',
        loose: false,
      },
    ],
    '@babel/react',
    '@babel/typescript',
  ]
  const plugins = [
    '@babel/plugin-proposal-optional-chaining',
  ]

  if (env === 'test') {
    plugins.unshift('@babel/plugin-transform-modules-commonjs')
  }

  // https://stackoverflow.com/questions/52407499/how-do-i-use-babels-usebuiltins-usage-option-on-the-vendors-bundle
  const ignore = [/\/core-js/]
  const overrides = [
    {
      sourceType: 'unambiguous',
      test: /node_modules/,
    },
    {
      sourceType: 'unambiguous',
      test: /internals\/webpack/,
    },
  ]

  return {
    // sourceType: 'unambiguous',
    overrides,
    ignore,
    plugins,
    presets,
  }
}
