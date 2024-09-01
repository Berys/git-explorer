import React, { useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors, customFontsToLoad } from './theme';
import { StatusBar } from 'expo-status-bar';
import { QueryProvider } from '@api/api-provider';
import { RootNavigator } from '@navigators/root-navigation';
import ErrorBoundary from '@utils/error-boundary';
import { normalize } from '@utils/theme-utils';

SplashScreen.preventAutoHideAsync();

function App() {
  const [areFontsLoaded, fontLoadError] = useFonts(customFontsToLoad);

  const onLayoutRootView = useCallback(async () => {
    if (areFontsLoaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 2000); // Ensures the splash screen is displayed for at least 2 seconds
    }
  }, [areFontsLoaded]);

  if (fontLoadError) {
    return (
      <ErrorBoundary>
        <Text style={styles.errorText}>Font loading error!</Text>
      </ErrorBoundary>
    );
  }

  return (
    <GestureHandlerRootView
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <StatusBar style="light" />
      <SafeAreaProvider>
        <ErrorBoundary>
          <QueryProvider>
            <RootNavigator />
          </QueryProvider>
        </ErrorBoundary>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    color: colors.text.primary,
    fontSize: 18,
    marginTop: normalize(20),
    textAlign: 'center',
  },
});
