import { v4 as uuidv4 } from 'uuid';
import { genderValues, loyaltyPrograms } from '../constants/initialStates';

export const usersDB = [
  {
    id: uuidv4(),
    firstName: 'John',
    surname: 'Doe',
    gender: genderValues.male,
    loyaltyProgram: loyaltyPrograms.unavailable,
    cardNumber: '',
    createdAt: Date.now(),
  },
  {
    id: uuidv4(),
    firstName: 'Ann',
    surname: 'Dre',
    gender: genderValues.female,
    loyaltyProgram: loyaltyPrograms.card,
    cardNumber: '1111222233334444',
    createdAt: Date.now(),
  },
  {
    id: uuidv4(),
    firstName: 'Player',
    surname: 'Unknown',
    gender: genderValues.male,
    loyaltyProgram: loyaltyPrograms.mobile,
    cardNumber: '',
    createdAt: Date.now(),
  },
];
