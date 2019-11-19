import React from 'react';
import {
  Input,
  InputElement,
  InputProps,
} from 'react-native-ui-kitten';
import {
  FormikContextType,
  useFormikContext,
} from 'formik';
import { AlertTriangleIcon } from '../assets/icons';

interface FormInputProps extends InputProps {
  id: string;
}

export const FormInput = ({ id, ...inputProps }: FormInputProps): InputElement => {

  const formContext: FormikContextType<{}> = useFormikContext();

  // @ts-ignore
  const { [id]: error } = formContext.errors;

  const fieldProps: Partial<InputProps> = {
    status: error && 'danger',
    captionIcon: error && AlertTriangleIcon,
  };

  return (
    <Input
      {...inputProps}
      {...fieldProps}
      caption={error}
      onChangeText={formContext.handleChange(id)}
    />
  );
};

