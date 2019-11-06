import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Layout,
  LayoutElement,
  Text,
} from 'react-native-ui-kitten';
import { TodoDoneScreenProps } from '../../navigation/todo.navigator';

export const TodoDoneScreen = (props: TodoDoneScreenProps): LayoutElement => (
  <Layout style={styles.container}>
    <Text category='h4'>
      No done todos yet.
    </Text>
    <Button style={styles.addButton}>
      ADD TODO
    </Button>
  </Layout>
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
  addButton: {
    marginVertical: 8,
  },
});
