import { combineReducers} from 'redux';
import { contactsReducer, filterReducer } from './redusers';
import { configureStore } from '@reduxjs/toolkit';

const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReduser,
});
