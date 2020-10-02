import { createAction } from '@reduxjs/toolkit';

export const fetchFactRequest = createAction('facts/FETCH_FACT_REQUEST');
export const fetchFactSuccess = createAction('facts/FETCH_FACT_SUCCESS');
export const fetchFactError = createAction('facts/FETCH_FACT_ERROR');
