import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../scenes/welcome.component';
import { AppRoute } from './app-routes';

const Stack = createStackNavigator();

export const AppNavigator = (config): React.ReactElement => (
  <Stack.Navigator {...config} headerMode='none'>
    <Stack.Screen name={AppRoute.AUTH} component={WelcomeScreen}/>
  </Stack.Navigator>
);
