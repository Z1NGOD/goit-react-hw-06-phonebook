import actions from './constants';
import { createReducer } from '@reduxjs/toolkit';


const InitialContactsState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) || [],
};

export const contactsReducer = createReducer(InitialContactsState, {
  [actions.ADD_CONTACT]: (state, action) => ({
    ...state,
    contacts: [...state.contacts, action.payload],
  }),
  [actions.DELETE_CONTACT]: (state, action) => ({
    ...state,
    contacts: state.contacts.filter(contact => contact.id !== action.payload),
  }),
});

const initialFilterState = {
  filter: '',
};

export const filterReducer = createReducer(initialFilterState, {
  [actions.CHANGE_FILTER]: (state, action) => ({
    ...state,
    filter: action.payload,
  }),
});
