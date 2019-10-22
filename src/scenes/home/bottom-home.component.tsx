import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  Divider,
} from 'react-native-ui-kitten';
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from '@app-components/safe-area-layout.component';
import {
  LayoutIcon,
  PersonIcon,
} from '@app-assets/icons';

export const BottomHomeScreen = (props): SafeAreaLayoutElement => {

  const [selectedIndex, setSelectedIndex] = React.useState<number>(props.state.index);

  const onSelect = (index: number): void => {
    const { [index]: selectedRoute } = props.state.routeNames;

    props.navigation.navigate(selectedRoute);
    setSelectedIndex(index);
  };

  return (
    <SafeAreaLayout insets={SaveAreaInset.BOTTOM}>
      <Divider/>
      <BottomNavigation
        appearance='noIndicator'
        selectedIndex={selectedIndex}
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
