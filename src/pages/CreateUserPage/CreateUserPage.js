import React from 'react';
import UserForm from '../../components/UserForm/UserForm';
import useGetFact from '../../hooks/useGetFact';

export default function Page() {
  const { fact } = useGetFact();

  return (
    <section>
      <UserForm fact={fact} />
    </section>
  );
}
