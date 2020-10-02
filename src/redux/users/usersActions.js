import { createAction } from '@reduxjs/toolkit';

export const createUserRequest = createAction('users/CREATE_USER_REQUEST');
export const createUserSuccess = createAction('users/CREATE_USER_SUCCESS');
export const createUserError = createAction('users/CREATE_USER_ERROR');
