import * as StocksAPI from '../util/stocks_api';

export const RECEIVE_BATCH_QUOTES = 'RECEIVE_BATCH_QUOTES';
export const RECEIVE_API_ERRORS = 'RECEIVE_API_ERRORS';
export const CLEAR_API_ERRORS = 'CLEAR_API_ERRORS';

export const clearApiErrors = () => ({
  type: CLEAR_API_ERRORS,
});

export const receiveApiErrors = (errors) => ({
  type: RECEIVE_API_ERRORS,
  errors,
});

export const receiveBatchQuotes = (data) => ({
  type: RECEIVE_BATCH_QUOTES,
  data,
});

export const fetchQuotes = (symbols, params, apiKey) => (dispatch) => {
  return StocksAPI.fetchQuotes(symbols, params, apiKey)
    .then((results) => dispatch(receiveBatchQuotes(results)))
    .catch((errors) => dispatch(receiveApiErrors(errors)));
};

export const maybeFetchQuotes = (symbols, quotes, params, apiKey) => (
  dispatch
) => {
  return StocksAPI.maybeFetchQuotes(symbols, quotes, params, apiKey)
    .then((results) => results && dispatch(receiveBatchQuotes(results)))
    .catch((errors) => dispatch(receiveApiErrors(errors)));
};
