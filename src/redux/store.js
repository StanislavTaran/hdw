// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
//
//
// const persistConfig = {
//   key: 'cart',
//   storage,
// };
//
// const middlewares = [ReduxThunk];
//
// const rootReducer = combineReducers({
//   app,
//   products,
//   filters,
//   cart: persistReducer(persistConfig, cart),
//   auth,
//   toastr: toastrReducer,
// });
//
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: middlewares,
//   devTools: true,
// });
//
// export const persistor = persistStore(store);
