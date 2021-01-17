/**
 * Search for companies/tickers
 */
import _ from 'lodash';

import * as AvAPI from './av_api';
import * as IexAPI from './iex_api';
import { splitByMatches } from './utils';

// TODO: add updateQuotes(oldQuotes, interval) to only refresh
// quotes that are stale (and current time is during trading/extended hours)
export const fetchQuotes = IexAPI.fetchQuotes;

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
