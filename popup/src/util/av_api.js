/**
 * Alphavantage financial API:
 * https:*www.alphavantage.co/documentation/
 */
import { mapKeys } from './utils';

const BASE_URL = 'https://www.alphavantage.co/query?';

const createUrl = (params, apiKey) => {
  params.apikey = apiKey;
  const encoded = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  return BASE_URL + encoded;
};

const sendRequest = async (params, apiKey) => {
  const url = createUrl(params, apiKey);
  console.log('API: ', url);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  const data = await res.json();

  if (typeof data['Error Message'] !== 'undefined') {
    throw new Error(data['Error Message']);
  } else if (typeof data['Note'] !== 'undefined') {
    throw new Error(`API limit exceeded: ${data['Note']}`);
  }

  return data;
};

// Searching

// fields are prepended with '1. ', '2. ', etc.
const cleanSearch = (results) => {
  return results.map((res) =>
    mapKeys(res, (_, k) => k.slice(3).replace(/ /g, '_'))
  );
};

export const search = async (query, apiKey) => {
  const params = {
    function: 'SYMBOL_SEARCH',
    keywords: query,
  };

  let res = await sendRequest(params, apiKey);
  return res['bestMatches'] ? cleanSearch(res['bestMatches']) : [];
};
