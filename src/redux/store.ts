import { configureStore } from '@reduxjs/toolkit';

import {
 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {contactReducer}   from './contactsSlice';
import { filterReducer } from './filterSlice';
import { userReducer } from './user/userSlise';



export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    user: userReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



