const moduleResolverConfig = {
  root: './',
  alias: {
    '@app-navigation': './src/navigation',
    '@app-scenes': './src/scenes',
    '@app-components': './src/components',
    '@app-assets': './src/assets',
    '@app-data': './src/data',
  },
};

const presets = [
  'module:metro-react-native-babel-preset',
];

const plugins = [
  ['module-resolver', moduleResolverConfig],
];

module.exports = function (api) {
  api.cache(true);

  return { presets, plugins };
};
