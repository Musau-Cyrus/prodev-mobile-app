module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for Expo Router
      require.resolve("expo-router/babel"),
      // Required for NativeWind
      "nativewind/babel",
      // Required for React Native Reanimated
      'react-native-reanimated/plugin',
    ],
  };
};