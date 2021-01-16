import * as StocksAPI from '../util/stocks_api';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS';

export const receiveSearchErrors = (errors) => ({
  type: RECEIVE_SEARCH_ERRORS,
  errors,
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});

export const receiveSearchResults = (results) => ({
  type: RECEIVE_SEARCH_RESULTS,
  results,
});

export const fetchSearchResults = (query, apiKey) => (dispatch) => {
  return StocksAPI.fetchSearchResults(query, apiKey)
    .then((results) => dispatch(receiveSearchResults(results)))
    .catch((errors) => dispatch(receiveSearchErrors(errors)));
};
