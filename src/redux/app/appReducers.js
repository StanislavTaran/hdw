import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as appActions from './appActions';

export const isShowNavBar = createReducer(false, {
  [appActions.setIsShowNavBar]: (state, action) => action.payload,
});

export default combineReducers({ isShowNavBar });
