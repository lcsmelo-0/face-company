module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          'app-components': './src/components',
          'app-consts': './src/consts',
          'app-images': './public/images',
        },
      },
    ],
  ],
}
