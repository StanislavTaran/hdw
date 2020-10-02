import React from 'react';
import T from 'prop-types';
import UsersItem from '../UsersItem/UsersItem';

import styles from './UsersList.module.scss';
import { user as userType } from '../../constants/propTypes';

export default function UsersList({ users }) {
  return (
    <ul className={styles.userList}>
      {users.map(user => (
        <UsersItem key={user.id} user={user} />
      ))}
    </ul>
  );
}

UsersList.propTypes = {
  users: T.arrayOf(T.shape(userType)),
};
