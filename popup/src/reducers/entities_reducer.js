import { combineReducers } from 'redux';

import searchResults from './entities/search_reducer';
import lists from './entities/lists_reducer';

export default combineReducers({
  searchResults,
  lists,
});
