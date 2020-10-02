import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as usersActions from './usersActions';
import { usersInitialState } from '../../constants/initialStates';

const users = createReducer(usersInitialState, {
  [usersActions.addUserAction]: (state, action) => action.payload,
});

export default combineReducers({
  users,
});
