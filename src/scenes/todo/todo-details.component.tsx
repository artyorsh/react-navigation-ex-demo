import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Button,
  Layout,
  LayoutElement,
  Text,
} from 'react-native-ui-kitten';
import {
  EdgeInsets,
  useSafeArea,
} from 'react-native-safe-area-context';
import { Toolbar } from '@app-components/toolbar.component';
import { ImageOverlay } from '@app-components/image-overlay.component';
import { ProgressBar } from '@app-components/progress-bar.component';

// FIXME(REACT-NAVIGATION-5): props type definitions? (used in `todo.navigator.tsx`)
export const TodoDetailsScreen = (props): LayoutElement => {

  const { todo } = props.route.params;
  const insets: EdgeInsets = useSafeArea();

  return (
    <React.Fragment>
      <ImageOverlay
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={require('../../assets/image-background.jpeg')}>
        <Toolbar
          appearance='control'
          onBackPress={props.navigation.goBack}
        />
      </ImageOverlay>
      <Layout style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text
            style={styles.title}
            category='h4'>
            {todo.title}
          </Text>
          <ProgressBar
            style={styles.progressBar}
            progress={todo.progress}
            text={`${todo.progress}%`}
          />
          <Text style={styles.title}>
            {todo.description}
          </Text>
        </View>
        <Button
          onPress={props.navigation.goBack}>
          COMPLETE
        </Button>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  appBar: {
    height: 192,
  },
  title: {
    marginVertical: 4,
  },
  progressBar: {
    width: '50%',
    marginVertical: 16,
  },
});
