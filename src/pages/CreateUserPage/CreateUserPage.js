import React from 'react';
import UserForm from '../../components/UserForm/UserForm';
import useGetFact from '../../hooks/useGetFact';

export default function Page() {
  const { fact } = useGetFact();

  const onCreateUser = values => console.log(values);

  return (
    <section>
      <UserForm fact={fact} onCreateUser={onCreateUser} />
    </section>
  );
}
