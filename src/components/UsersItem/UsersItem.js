import React from 'react';
import T from 'prop-types';
import styles from './UsersItem.module.scss';
import { toDate, lightFormat } from 'date-fns';
import { user as userTypes } from '../../constants/propTypes';
import userAvatar from '../../images/user.jpg';

export default function UserItem({ user }) {
  return (
    <li className={styles.userItem}>
      <img className={styles.avatar} src={userAvatar} alt="avatar" />
      <p>
        <span className={styles.labelTitle}>Full name:</span>
        {` ${user.firstName} ${user.surname}`}
      </p>
      <p>
        <span className={styles.labelTitle}>Created At:</span>
        {` ${lightFormat(toDate(user.createdAt), 'dd/MM/yyyy')}`}
      </p>
    </li>
  );
}
UserItem.propTypes = {
  user: T.shape(userTypes),
};
