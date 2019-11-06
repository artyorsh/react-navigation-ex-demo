import React from 'react';
import {
  CompositeNavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/core';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {
  BottomTabBarProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { TodoNavigator } from './todo.navigator';
import { ProfileNavigator } from './profile.navigator';
import { AppRoute } from './app-routes';
import {
  BottomHomeScreen,
  DrawerHomeScreen,
  AboutScreen,
} from '../scenes/home';

export interface HomeDrawerNavigatorParams extends ParamListBase {
  [AppRoute.HOME]: undefined;
  [AppRoute.ABOUT]: undefined;
}

export interface HomeBottomTabsNavigatorParams extends ParamListBase {
  [AppRoute.TODO]: undefined;
  [AppRoute.PROFILE]: undefined;
}

export type TodoTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.TODO>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>
>;

export type ProfileTabNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeBottomTabsNavigatorParams, AppRoute.PROFILE>,
  DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>
>;

export interface AboutScreenProps {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
  route: RouteProp<HomeDrawerNavigatorParams, AppRoute.ABOUT>;
}

export type BottomHomeScreenProps = BottomTabBarProps & {
  navigation: TodoTabNavigationProp;
};

export type DrawerHomeScreenProps = DrawerContentComponentProps & {
  navigation: DrawerNavigationProp<HomeDrawerNavigatorParams, AppRoute.HOME>;
};

const Drawer = createDrawerNavigator<HomeDrawerNavigatorParams>();
const BottomTab = createBottomTabNavigator<HomeBottomTabsNavigatorParams>();

// FIXME(REACT-NAVIGATION-5): Not able to disable a pan gesture.
//
// In v4, it was possible with `navigationOptions: { gesturesEnabled: false }`
// Basically, I want to do this to disable `back` navigation from home screen to auth
// For Android, it can be covered with custom BackHandler.
//
// I'm not sure if it is a "true way", but I find it better
// rather than hard-coding business logic in navigators
// like it is described in https://reactnavigation.org/docs/en/next/auth-flow.html

const HomeBottomNavigator = (): React.ReactElement => (
  // @ts-ignore: `tabBarComponent` also contains a DrawerNavigationProp
  <BottomTab.Navigator tabBar={BottomHomeScreen}>
    <BottomTab.Screen name={AppRoute.TODO} component={TodoNavigator}/>
    <BottomTab.Screen name={AppRoute.PROFILE} component={ProfileNavigator}/>
  </BottomTab.Navigator>
);

export const HomeNavigator = (): React.ReactElement => (
  // @ts-ignore: `contentComponent` also contains a DrawerNavigationProp
  <Drawer.Navigator drawerContent={DrawerHomeScreen}>
    <Drawer.Screen name={AppRoute.HOME} component={HomeBottomNavigator}/>
    <Drawer.Screen name={AppRoute.ABOUT} component={AboutScreen}/>
  </Drawer.Navigator>
);

