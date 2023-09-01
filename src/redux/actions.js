import { nanoid } from 'nanoid';
import actions from './constants';

export const addContacts = (name, number) => {
  return {
    type: actions.ADD_CONTACT,
    payload: {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    },
  };
};

export const deleteContact = id => {
  return {
    type: actions.DELETE_CONTACT,
    payload: id,
  };
};

export const changeFilter = filter => {
  return {
    type: actions.CHANGE_FILTER,
    payload: filter,
  };
};
