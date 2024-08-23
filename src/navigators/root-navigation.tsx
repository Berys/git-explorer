import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GitExplorer } from '@features/git-explorer/screens';

export type AppStackParamList = {
  GitExplorer: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const Root = () => {
  return (
    <Stack.Navigator initialRouteName="GitExplorer">
      <Stack.Screen
        name="GitExplorer"
        component={GitExplorer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => (
  <NavigationContainer>
    <Root />
  </NavigationContainer>
);
