import * as Yup from 'yup';
const phoneRegExp = /^\d{10}$/;

class ValidationSchema {
  static email = Yup.string().email('Жарамсыз электрондық пошта').required('Міндетті');
}

class Schemas extends ValidationSchema {
  static signupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Өте қысқа!')
      .max(50, 'Тым ұзақ!')
      .required('Міндетті'),
    lastName: Yup.string()
      .min(2, 'Өте қысқа!')
      .max(50, 'Тым ұзақ!')
      .required('Міндетті'),
    email: ValidationSchema.email,
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Телефон нөмірі жарамсыз.')
      .required('Міндетті'),
    password: Yup.string()
      .min(8, 'Құпия сөз тым қысқа - кем дегенде 8 таңба болуы керек.')
      .required('Міндетті'),
    confirmPassword: Yup.string().required('Міндетті'),
  });
}

export default Schemas;
