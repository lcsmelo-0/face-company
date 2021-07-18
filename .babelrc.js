module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          'app-images': './public/images',
        },
      },
    ],
  ],
}
