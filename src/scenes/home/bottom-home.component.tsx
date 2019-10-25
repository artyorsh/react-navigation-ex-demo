import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
} from 'react-native-ui-kitten';
import { BottomHomeScreenProps } from '@app-navigation/home.navigator';
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from '@app-components/safe-area-layout.component';
import {
  LayoutIcon,
  PersonIcon,
} from '@app-assets/icons';

export const BottomHomeScreen = (props: BottomHomeScreenProps): SafeAreaLayoutElement => {

  const onSelect = (index: number): void => {
    const { [index]: selectedTabRoute } = props.state.routeNames;
    props.navigation.navigate(selectedTabRoute);
  };

  return (
    <SafeAreaLayout insets={SaveAreaInset.BOTTOM}>
      <Divider/>
      <BottomNavigation
        appearance='noIndicator'
        selectedIndex={props.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab
          icon={LayoutIcon}
          title='TODO'
        />
        <BottomNavigationTab
          icon={PersonIcon}
          title='PROFILE'
        />
      </BottomNavigation>
    </SafeAreaLayout>
  );
};
