import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as factsActions from './factsActions';

export const fact = createReducer('', {
  [factsActions.fetchFactSuccess]: (state, action) => action.payload,
});

export const error = createReducer('', {
  [factsActions.fetchFactError]: (state, action) => action.payload,
});

export default combineReducers({
  fact,
  error,
});
