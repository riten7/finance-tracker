import { combineReducers } from 'redux';
import accounts from './account';
import transactions from './transaction';
import tags from './tags'; 

export default combineReducers({
  accounts, 
  transactions,
  tags,
});