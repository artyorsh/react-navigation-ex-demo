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
} from 'react-native-ui-kitten';
import { DrawerHomeScreenProps } from '../../navigation/home.navigator';
import { AppRoute } from '../../navigation/app-routes';
import {
  HomeIcon,
  InfoIcon,
  LogoutIcon,
} from '../../assets/icons';

const drawerData: MenuItemType[] = [
  { icon: HomeIcon, title: 'Home' },
  { icon: InfoIcon, title: 'About' },
  { icon: LogoutIcon, title: 'Log Out' },
];

const DrawerHeader = (): React.ReactElement<ImageBackgroundProps> => (
  <ImageBackground
    style={styles.header}
    source={require('../../assets/image-background.jpeg')}
  />
);

export const DrawerHomeScreen = (props: DrawerHomeScreenProps): DrawerElement => {

  const onMenuItemSelect = (index: number): void => {
    const { [index]: selectedItem } = drawerData;

    switch (selectedItem.title) {
      case 'Log Out':
        props.navigation.navigate(AppRoute.AUTH);
        break;
      default:
        props.navigation.navigate(selectedItem.title);
        break;
    }

    props.navigation.closeDrawer();
  };

  return (
    <Drawer
      header={DrawerHeader}
      data={drawerData}
      onSelect={onMenuItemSelect}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    height: 160,
  },
});
