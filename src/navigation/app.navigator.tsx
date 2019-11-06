import React from 'react';
import { ParamListBase } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './auth.navigator';
import { HomeNavigator } from './home.navigator';
import { AppRoute } from './app-routes';

type StackNavigatorProps = React.ComponentProps<typeof Stack.Navigator>;

interface AppNavigatorParams extends ParamListBase {
  [AppRoute.AUTH]: undefined;
  [AppRoute.HOME]: undefined;
}

const Stack = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = (config: Partial<StackNavigatorProps>): React.ReactElement => (
  <Stack.Navigator {...config} headerMode='none'>
    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator}/>
    <Stack.Screen name={AppRoute.HOME} component={HomeNavigator}/>
  </Stack.Navigator>
);
