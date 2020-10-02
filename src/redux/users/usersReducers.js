import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as usersActions from './usersActions';
import { usersInitialState } from '../../constants/initialStates';

const users = createReducer(usersInitialState, {
  [usersActions.createUserSuccess]: (state, action) => [...state, action.payload],
});

const error = createReducer('', {
  [usersActions.createUserError]: (state, action) => action.payload,
  [usersActions.createUserRequest()]: (state, action) => '',
});

export default combineReducers({
  users,
  error,
});
