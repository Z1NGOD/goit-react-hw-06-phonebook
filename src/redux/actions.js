import actions from './constants';
import { createAction } from '@reduxjs/toolkit';

export const addContacts = createAction(actions.ADD_CONTACT);
export const deleteContact = createAction(actions.DELETE_CONTACT);
export const changeFilter = createAction(actions.CHANGE_FILTER);

