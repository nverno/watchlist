import { combineReducers } from 'redux';

import search from './errors/search_errors_reducer';
import api from './errors/api_errors_reducer';
import lists from './errors/list_errors_reducer';

export default combineReducers({
  search,
  api,
  lists,
});
