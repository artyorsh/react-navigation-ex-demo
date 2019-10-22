import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Divider,
  Layout,
  Text,
} from 'react-native-ui-kitten';
import {
  SafeAreaLayout,
  SafeAreaLayoutElement,
  SaveAreaInset,
} from '@app-components/safe-area-layout.component';
import { Toolbar } from '@app-components/toolbar.component';
import { MenuIcon } from '@app-assets/icons';

// FIXME(REACT-NAVIGATION-5): props type definitions? (used in `profile.navigator.tsx`)
export const ProfileScreen = (props): SafeAreaLayoutElement => (
  <SafeAreaLayout
    style={styles.safeArea}
    insets={SaveAreaInset.TOP}>
    <Toolbar
      title='React Navigation Ex 🐱'
      backIcon={MenuIcon}
      onBackPress={props.navigation.toggleDrawer}
    />
    <Divider/>
    <Layout style={styles.container}>
      <Text category='h1'>
        PROFILE
      </Text>
    </Layout>
  </SafeAreaLayout>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
