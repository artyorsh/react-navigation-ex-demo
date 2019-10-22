import * as Yup from 'yup';

export class ResetPasswordData {

  constructor(readonly email: string) {

  }

  static empty(): ResetPasswordData {
    return new ResetPasswordData(
      '',
    );
  }
}

export const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email'),
});
