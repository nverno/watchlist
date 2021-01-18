/**
 * Search for companies/tickers
 */
import _ from 'lodash';

import * as AvAPI from './av_api';
import * as IexAPI from './iex_api';
import { splitByMatches } from './utils';

export const formatSearchResults = (query, results) => {
  const [stocks, funds] = _.partition(
    results.map(({ symbol, name, type, region }) => ({
      value: symbol,
      symbol: splitByMatches(query, symbol),
      name: splitByMatches(query, name),
      type,
      region,
    })),
    ['type', 'Equity']
  );
  return { stocks, funds };
};

export const fetchSearchResults = async (query, apiKey = null) => {
  let results = await AvAPI.search(query, apiKey);
  return formatSearchResults(query, results);
};

// TODO: add updateQuotes(oldQuotes, interval) to only refresh
// quotes that are stale (and current time is during trading/extended hours)
// unconditionally fetch quotes
export const fetchQuotes = IexAPI.fetchQuotes;

// fetch quotes for new symbols
export const maybeFetchQuotes = async (symbols, quotes, params, apiKey) => {
  const syms = symbols.filter((symbol) => !quotes[symbol]);
  if (syms.length) return fetchQuotes(syms, params, apiKey);
  return false;
};
