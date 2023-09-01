import actions from './constants';

const InitialContactsState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) || [],
};
const initialFilterState = {
  filter: '',
};
export const contactsReducer = (state = InitialContactsState, action) => {
  switch (action.type) {
    case actions.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case actions.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const filterReducer = (state = initialFilterState, action) => {
  if (action.type === actions.CHANGE_FILTER) {
    return {
      ...state,
      filter: action.payload,
    };
  } else {
    return state;
  }
};
