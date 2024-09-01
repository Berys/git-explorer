import 'react-native-gesture-handler/jestSetup';

// EXPO MOCKS
jest.mock('expo-modules-core', () => {
  const ActualExpoModulesCore = jest.requireActual('expo-modules-core');
  return {
    ...ActualExpoModulesCore,
    NativeModulesProxy: new Proxy(
      {},
      {
        get: (target, prop) => {
          if (prop === '__esModule') {
            return true;
          }
          return {};
        },
      },
    ),
    NativeEventEmitter: jest.fn(),
    requireNativeModule: jest.fn(),
  };
});

jest.mock('expo-font', () => ({
  ...jest.requireActual('expo-font'),
  loadAsync: jest.fn(),
}));

jest.mock('@expo-google-fonts/lato', () => ({
  useFonts: () => [true],
}));
