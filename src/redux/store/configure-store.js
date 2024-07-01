import { combineReducers, configureStore } from '@reduxjs/toolkit';

const counter = () => 0;

const reducer = combineReducers({ counter });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
