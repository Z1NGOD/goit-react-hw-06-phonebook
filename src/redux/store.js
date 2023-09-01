
import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { contactsReducer, filterReducer } from './redusers';

const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const enhencer = devToolsEnhancer();

export const store = createStore(rootReduser, enhencer);
