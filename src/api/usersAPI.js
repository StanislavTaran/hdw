import fs from 'fs/promises';
import { usersDB } from '../db/usersDb';

const fetchUsers = () => {
  return fs.readFile('../db/usersDb', 'utf-8');
};
