import * as Yup from 'yup';

export class SignUpData {

  constructor(
    readonly email: string,
    readonly password: string,
    readonly username: string) {

  }

  static empty(): SignUpData {
    return new SignUpData(
      '',
      '',
      '',
    );
  }
}

export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email'),
  password: Yup.string().min(8, 'Password must be at least 8 characters'),
  username: Yup.string().min(2, 'Username must be at least 2 characters'),
});

