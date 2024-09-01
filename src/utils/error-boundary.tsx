import { colors } from '@theme/colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { horizontalScale, normalize, verticalScale } from './theme-utils';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<unknown>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<unknown>) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error in ErrorBoundary:', error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <View style={styles.center}>
          <Text style={styles.errorText}>{'Something went wrong :('}</Text>
          <Text style={styles.errorDetails}>
            {this.state.error?.toString()}
          </Text>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: horizontalScale(20),
  },
  errorDetails: {
    color: colors.text.primary,
    fontSize: normalize(14),
  },
  errorText: {
    color: colors.text.primary,
    fontSize: normalize(18),
    marginBottom: verticalScale(10),
  },
});

export default ErrorBoundary;
