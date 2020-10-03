import * as usersActions from './usersActions';
import * as usersAPI from '../../api/usersAPI';
import { toastr } from 'react-redux-toastr';

export const fetchUsers = () => dispatch => {
  dispatch(usersActions.fetchUsersRequest());

  return usersAPI
    .fetchUsers()
    .then(res => {
      dispatch(usersActions.fetchUsersSuccess(res));
    })
    .catch(e => {
      dispatch(usersActions.fetchUsersError(e));
    });
};

export const createUser = user => dispatch => {
  dispatch(usersActions.createUserRequest());

  return usersAPI
    .createUser(user)
    .then(res => {
      dispatch(usersActions.createUserSuccess(res));
      toastr.success('Success', 'User successfully created.');
    })
    .catch(e => {
      dispatch(usersActions.createUserError(e));
      toastr.error('Something went wrong');
    });
};
