import { nanoid } from 'nanoid';

export const addContacts = (name, number) => {
    return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    },
  };
}

export const deleteContact = (id) => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};

export const changeFilter = (filter) => {
    return {
    type: 'contacts/changeFilter',
    payload: filter,
  };
}



