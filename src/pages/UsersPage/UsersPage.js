import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../../redux/users/usersSelectors';
import UsersList from '../../components/UsersList/UsersList';

export default function Page() {
  const users = useSelector(getUsers);

  return (
    <section>
      <UsersList users={users} />
    </section>
  );
}
