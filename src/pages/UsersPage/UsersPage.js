import React from 'react';
import useGetUsers from '../../hooks/users/useGetUsers';
import UsersList from '../../components/UsersList/UsersList';

export default function Page() {
  const { users } = useGetUsers();

  return (
    <section>
      <UsersList users={users} />
    </section>
  );
}
