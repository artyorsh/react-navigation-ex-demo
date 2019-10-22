import React from 'react';
import {
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {
  Formik,
  FormikProps,
} from 'formik';
import {
  Button,
  Layout,
  LayoutElement,
} from 'react-native-ui-kitten';
import { FormInput } from '@app-components/form-input.component';
import {
  ResetPasswordData,
  ResetPasswordSchema,
} from '@app-data/reset-password.model';
import { AppRoute } from '@app-navigation/app-routes';

// FIXME(REACT-NAVIGATION-5): props type definitions? (used in `auth.navigator.tsx`)
export const ResetPasswordScreen = (props): LayoutElement => {

  const onFormSubmit = (values: ResetPasswordData): void => {
    navigateSignIn();
  };

  const navigateSignIn = (): void => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  };

  const renderForm = (props: FormikProps<ResetPasswordData>): React.ReactFragment => (
    <React.Fragment>
      <FormInput
        id='email'
        style={styles.formControl}
        placeholder='Email'
        keyboardType='email-address'
      />
      <Button
        style={styles.button}
        onPress={props.handleSubmit}>
        DONE
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ImageBackground
        style={styles.appBar}
        source={require('../../assets/image-note-background-1.jpg')}
      />
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={ResetPasswordData.empty()}
          validationSchema={ResetPasswordSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  formControl: {
    marginVertical: 4,
  },
  button: {
    marginVertical: 24,
  },
});
