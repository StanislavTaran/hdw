import T from 'prop-types';
import { genderValues, loyaltyPrograms } from './initialStates';

export const user = {
  id: T.string.isRequired,
  firstName: T.string.isRequired,
  surname: T.string.isRequired,
  gender: T.oneOf(Object.values(genderValues)).isRequired,
  loyaltyProgram: T.oneOf(Object.values(loyaltyPrograms)).isRequired,
  cardNumber: T.string,
  createdAt: T.number.isRequired,
};
