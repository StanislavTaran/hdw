import { v4 as uuidv4 } from 'uuid';

export const loyaltyPrograms = {
  unavailable: 'unavailable',
  mobile: 'Mobile App',
  card: 'Plastic Card',
};

export const genderValues = {
  male: 'male',
  female: 'female',
};

export const usersInitialState = [
  {
    id: uuidv4(),
    firstName: 'John',
    surname: 'Doe',
    sex: genderValues.male,
    loyaltyProgram: loyaltyPrograms.unavailable,
    cardNumber: '',
    createdAt: Date.now(),
  },
  {
    id: uuidv4(),
    firstName: 'Ann',
    surname: 'Dre',
    sex: genderValues.female,
    loyaltyProgram: loyaltyPrograms.card,
    cardNumber: '1111222233334444',
    createdAt: Date.now(),
  },
  {
    id: uuidv4(),
    firstName: 'Player',
    surname: 'Unknown',
    sex: genderValues.male,
    loyaltyProgram: loyaltyPrograms.mobile,
    cardNumber: '',
    createdAt: Date.now(),
  },
];
