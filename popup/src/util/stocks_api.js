/**
 * Search for companies/tickers
 */
import _ from 'lodash';

import * as AvAPI from './av_api';
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
