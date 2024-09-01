import React, { useCallback, useEffect } from 'react';
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
import { normalize, verticalScale } from '@utils/theme-utils';

SplashScreen.preventAutoHideAsync();

function App() {
  const [areFontsLoaded, fontLoadError] = useFonts(customFontsToLoad);

  useEffect(() => {
    async function hideSplashScreen() {
      if (areFontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [areFontsLoaded]);

  const onLayoutRootView = useCallback(() => {
    // TODO: Investigate useCallback problem on iOS - it is not catching in onLayoutRootView
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
    fontSize: normalize(20),
    marginTop: verticalScale(20),
    textAlign: 'center',
  },
});
