import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { reducer as toastrReducer } from 'react-redux-toastr';
import storage from 'redux-persist/lib/storage';
import app from './app/appReducers';
import users from './users/usersReducers';
import fact from './facts/factsReducers';

const persistConfig = {
  key: 'users',
  storage,
};

const middlewares = [ReduxThunk];

const rootReducer = combineReducers({
  app,
  fact,
  users: persistReducer(persistConfig, users),
  toastr: toastrReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: true,
});

export const persistor = persistStore(store);
