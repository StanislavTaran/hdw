import React from 'react';
import T from 'prop-types';
import styles from './UsersItem.module.scss';
import { user as userTypes } from '../../constants/propTypes';

export default function UserItem({ user }) {
  return (
    <li className={styles.userItem}>
      <p>{`Full name: ${user.firstName} ${user.surname}`}</p>
      <p>{`Created At: ${user.createdAt}`}</p>
    </li>
  );
}
UserItem.propTypes = {
  user: T.shape(userTypes),
};
