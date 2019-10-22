import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './auth.navigator';
import { HomeNavigator } from './home.navigator';
import { AppRoute } from './app-routes';

const Stack = createStackNavigator();

// FIXME(REACT-NAVIGATION-5): Stack.Navigator `config` prop type definition?

export const AppNavigator = (config): React.ReactElement => (
  <NavigationNativeContainer>
    <Stack.Navigator {...config} headerMode='none'>
      <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator}/>
      <Stack.Screen name={AppRoute.HOME} component={HomeNavigator}/>
    </Stack.Navigator>
  </NavigationNativeContainer>
);
