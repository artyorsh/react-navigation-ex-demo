import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  LayoutElement,
  Text,
} from 'react-native-ui-kitten';

export const WelcomeScreen = (props): LayoutElement => (
  <Layout style={styles.container}>
    <Text style={styles.text} category='h1'>
      Welcome to React Navigation 5 Guide
    </Text>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
