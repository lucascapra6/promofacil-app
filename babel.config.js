module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@api': './src/api',
          '@assets': './src/assets',
          '@routes': './src/routes',
          '@store': './src/store',
          themes: './src/themes',
          '@utils': './src/utils',
          '@reactQuery': './src/reactQuery',
          hooks: './src/hooks',
        }
      }
    ],
    'react-native-reanimated/plugin',
  ]
}
