import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './navigators';
import { customFontsToLoad } from './theme';
import { StatusBar } from 'expo-status-bar';
import { QueryProvider } from '@api/api-provider';

SplashScreen.preventAutoHideAsync();

function App() {
  const [areFontsLoaded, fontLoadError] = useFonts(customFontsToLoad);

  const onLayoutRootView = useCallback(async () => {
    if (areFontsLoaded || fontLoadError) {
      // setTimeout(async () => {
      await SplashScreen.hideAsync();
      // }, 2000);
    }
  }, [areFontsLoaded, fontLoadError]);

  if (!areFontsLoaded && !fontLoadError) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <StatusBar style="light" />
      <SafeAreaProvider>
        <QueryProvider>
          <RootNavigator />
        </QueryProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
