import React from 'react';
import { ImageBackground, ImageBackgroundProps, StyleSheet } from 'react-native';
import { Drawer, DrawerElement, DrawerItem, IndexPath, DrawerItemElement } from '@ui-kitten/components';
import { DrawerHomeScreenProps } from '../../navigation/home.navigator';

const DrawerHeader = (): React.ReactElement<ImageBackgroundProps> => (
  <ImageBackground
    style={styles.header}
    source={require('../../assets/image-background.jpeg')}
  />
);

export const HomeDrawer = (props: DrawerHomeScreenProps): DrawerElement => {

  const onItemSelect = (index: IndexPath): void => {
    const selectedTabRoute: string = props.state.routeNames[index.row];
    props.navigation.navigate(selectedTabRoute);
    props.navigation.closeDrawer();
  };

  const createDrawerItemForRoute = (route, index: number): DrawerItemElement => {
    const { options } = props.descriptors[route.key];
    return (
      <DrawerItem
        key={index}
        title={route.name}
        accessoryLeft={options.drawerIcon}
      />
    );
  };

  return (
    <Drawer
      header={DrawerHeader}
      onSelect={onItemSelect}>
      {props.state.routes.map(createDrawerItemForRoute)}
    </Drawer>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 160,
  },
});
