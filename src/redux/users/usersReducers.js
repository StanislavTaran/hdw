import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as usersActions from './usersActions';

const users = createReducer([], {
  [usersActions.createUserSuccess]: (state, action) => [...state, action.payload],
  [usersActions.fetchUsersSuccess]: (state, action) => action.payload,
});

const error = createReducer('', {
  [usersActions.createUserError]: (state, action) => action.payload,
  [usersActions.createUserRequest()]: (state, action) => '',
});

export default combineReducers({
  users,
  error,
});
