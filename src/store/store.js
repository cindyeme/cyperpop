import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage/';

import { persistStore, persistReducer } from 'redux-persist';

import ApiHandler from './middlewares/api';

import reducer from './reducer';

// storage used is session storage

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducer);

// Application Store - Toolkit Brings in Redux Thunk and ... Using getDefaultMiddleware func
const store = () => {
  const storeConfig = configureStore({
    reducer: persistedReducer,

    middleware: [...getDefaultMiddleware(), ApiHandler],
  });

  const persistedStore = persistStore(storeConfig);

  return { storeConfig, persistedStore };
};

export default store;
