import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/users/usersSelectors';
import { fetchUsers } from '../../redux/users/usersOperations';

const useGetUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(getUsers);

  return {
    users,
  };
};

export default useGetUsers;
