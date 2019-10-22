import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  TodoDetailsScreen,
  TodoDoneScreen,
  TodoInProgressScreen,
  TodoScreen,
} from '@app-scenes/todo';
import { AppRoute } from './app-routes';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

// FIXME(REACT-NAVIGATION-5): Describe injected props type definitions.
//
// In this architecture, TodoScreen is a component of Top Tabs Navigator
// The same time, Top Tabs Navigator is a component for one of the Bottom Tab Navigator tabs
// The same time, Bottom Tab Navigator is a root component for Drawer Navigator :)
//
// What would be resulting props passed in:
// - TodoScreen. DrawerProps & TopTabsProps & BottomTabsProps?
// - TodoInProgressScreen. DrawerProps & TopTabsProps & BottomTabsProps & StackProps?
// - TodoDetailsScreen. (I guess it will contain DrawerProps & StackProps, but not BottomTabsProps)
//
// What is the best way to compose?
//
// To be honest, I'm not sure if it's really needed,
// but sometimes you have a calls like `toggleDrawer` and your autocomplete not works
// because of missing type definitions for navigation props :)

// FIXME(REACT-NAVIGATION-5): Swipes in TopTab.Navigator
//
// Is it possible to track swipe progress?
// In this case, it's needed to synchronize tab-bar indicator in TodoScreen
//
// Currently I have set `swipeEnabled` to `false` just for saving navigation consistence
//
// Btw, it's not possible to use `@react-navigation/material-top-tabs
// without `react-native-tab-view` even if you use custom `tabBarComponent`

const TodoTabsNavigator = (): React.ReactElement => (
  <TopTab.Navigator swipeEnabled={false} tabBarComponent={TodoScreen}>
    <TopTab.Screen name={AppRoute.TODO_IN_PROGRESS} component={TodoInProgressScreen}/>
    <TopTab.Screen name={AppRoute.TODO_DONE} component={TodoDoneScreen}/>
  </TopTab.Navigator>
);

export const TodoNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.TODO} component={TodoTabsNavigator}/>
    <Stack.Screen name={AppRoute.TODO_DETAILS} component={TodoDetailsScreen}/>
  </Stack.Navigator>
);
