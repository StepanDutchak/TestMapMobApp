module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // ..other plugins if any
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
          '@components': './src/components/index',
          '@constants': './src/constants/index',
          '@screens': './src/screens/index',
          '@icons': './src/assets/icons/index',
          '@themes': './src/themes/colors',
          '@types': './src/types',
          '@fetch': './src/fetch',
        },
      },
    ],
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }]
  ],
};
