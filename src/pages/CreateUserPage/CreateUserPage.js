import React from 'react';
import { useDispatch } from 'react-redux';
import UserForm from '../../components/UserForm/UserForm';
import useGetFact from '../../hooks/fact/useGetFact';
import { createUser } from '../../redux/users/usersOperations';

export default function Page() {
  const { fact } = useGetFact();
  const dispatch = useDispatch();

  const onCreateUser = values => dispatch(createUser(values));

  return (
    <section>
      <UserForm fact={fact} onCreateUser={onCreateUser} />
    </section>
  );
}
