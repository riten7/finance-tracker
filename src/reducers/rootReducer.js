import { combineReducers } from 'redux';
import accounts from './account';
import transactions from './transaction';

export default combineReducers({
  accounts, 
  transactions,
});