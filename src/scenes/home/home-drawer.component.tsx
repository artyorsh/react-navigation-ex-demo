import React from 'react';
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
} from 'react-native';
import {
  Drawer,
  DrawerElement,
  MenuItemType,
} from '@ui-kitten/components';
import { DrawerHomeScreenProps } from '../../navigation/home.navigator';

const DrawerHeader = (): React.ReactElement<ImageBackgroundProps> => (
  <ImageBackground
    style={styles.header}
    source={require('../../assets/image-background.jpeg')}
  />
);

export const HomeDrawer = (props: DrawerHomeScreenProps): DrawerElement => {

  const onMenuItemSelect = (index: number): void => {
    const selectedTabRoute: string = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
    props.navigation.closeDrawer();
  };

  const createNavigationItemForRoute = (route): MenuItemType => {
    const { options } = props.descriptors[route.key];
    return {
      routeName: route.name,
      title: options.title,
      icon: options.drawerIcon,
    };
  };

  return (
    <Drawer
      header={DrawerHeader}
      data={props.state.routes.map(createNavigationItemForRoute)}
      onSelect={onMenuItemSelect}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    height: 160,
  },
});
