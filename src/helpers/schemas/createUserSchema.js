import { object, string, mixed } from 'yup';
import { genderValues, loyaltyPrograms } from '../../constants/initialStates';

export const createUserSchema = object().shape({
  firstName: string()
    .min(3, 'Name must be at least 3 characters!')
    .max(20, 'Name must be no more than 20 characters!')
    .required('Name is required'),
  surname: string()
    .min(3, 'Surname must be at least 3 characters!')
    .max(20, 'Surname must be no more than 20 characters!')
    .required('Surname is required'),
  loyaltyProgram: mixed().oneOf(Object.values(loyaltyPrograms)),
  gender: mixed().oneOf(Object.values(genderValues)).required('Gender is required'),
  cardNumber: string()
    .min(16, 'Card must be at least 16 characters!')
    .max(20, 'Card must be no more than 20 characters!'),
});
