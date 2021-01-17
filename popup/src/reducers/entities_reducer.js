import { combineReducers } from 'redux';

import searchResults from './entities/search_reducer';
import lists from './entities/lists_reducer';
import quotes from './entities/stock_quotes_reducer';

export default combineReducers({
  searchResults,
  lists,
  quotes,
});
