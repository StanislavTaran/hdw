import { usersDB } from '../db/usersDb';
import { v4 as uuidv4 } from 'uuid';

export const fetchUsers = async () => {
  return usersDB;
};

const foo = user => {
  const newUser = { ...user, id: uuidv4(), createdAt: Date.now() };
  usersDB.push(newUser);
  return newUser;
};

export const createUser = user => {
  return new Promise(resolve => {
    resolve(foo(user));
  });
};
