import { createAction } from '@reduxjs/toolkit';

export const fetchUsersRequest = createAction('users/FETCH_USER_REQUEST');
export const fetchUsersSuccess = createAction('users/FETCH_USER_SUCCESS');
export const fetchUsersError = createAction('users/FETCH_USER_ERROR');

export const createUserRequest = createAction('users/CREATE_USER_REQUEST');
export const createUserSuccess = createAction('users/CREATE_USER_SUCCESS');
export const createUserError = createAction('users/CREATE_USER_ERROR');
