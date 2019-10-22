import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomHomeScreen,
  DrawerHomeScreen,
} from '@app-scenes/home';
import { AboutScreen } from '@app-scenes/about';
import { TodoNavigator } from './todo.navigator';
import { ProfileNavigator } from './profile.navigator';
import { AppRoute } from './app-routes';

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

// @REACT-NAVIGATION-5: Not able to disable a pan gesture.
//
// In v4, it was possible with `navigationOptions: { gesturesEnabled: false }`
// Basically, I want to do this to disable `back` navigation from home screen to auth
// For Android, it can be covered with custom BackHandler.
//
// I'm not sure if it is a "true way", but I find it better
// rather than hard-coding business logic in navigators
// like it is described in https://reactnavigation.org/docs/en/next/auth-flow.html

const HomeBottomNavigator = (): React.ReactElement => (
  <BottomTab.Navigator tabBarComponent={BottomHomeScreen}>
    <BottomTab.Screen name={AppRoute.TODO} component={TodoNavigator}/>
    <BottomTab.Screen name={AppRoute.PROFILE} component={ProfileNavigator}/>
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  <Drawer.Navigator contentComponent={DrawerHomeScreen}>
    <Drawer.Screen name={AppRoute.HOME} component={HomeBottomNavigator}/>
    <Drawer.Screen name={AppRoute.ABOUT} component={AboutScreen}/>
  </Drawer.Navigator>
);

