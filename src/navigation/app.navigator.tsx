import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '@app-scenes/welcome.component';
import { AppRoute } from './app-routes';

const Stack = createStackNavigator();

export const AppNavigator = (config): React.ReactElement => (
  <NavigationNativeContainer>
    <Stack.Navigator {...config} headerMode='none'>
      <Stack.Screen name={AppRoute.AUTH} component={WelcomeScreen}/>
    </Stack.Navigator>
  </NavigationNativeContainer>
);
