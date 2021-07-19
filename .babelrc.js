module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          'app-actions': './src/redux/_actions',
          'app-components': './src/components',
          'app-consts': './src/consts',
          'app-hooks': './src/hooks',
          'app-images': './public/images',
          'app-models': './src/models',
          'app-services': './src/services',
          'app-utils': './src/utils',
        },
      },
    ],
  ],
}
