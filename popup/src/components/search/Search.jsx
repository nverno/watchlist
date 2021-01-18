import React from 'react';
import { connect } from 'react-redux';
// import { BiSearch } from 'react-icons/bi';
// import { GiCancel } from 'react-icons/gi';

import './search.scss';
import {
  fetchSearchResults,
  clearSearchResults,
} from '../../actions/search_actions';

const mapStateToProps = (state, _ownProps) => ({
  avKey: state.settings.keys['avKey'],
});

const mapDispatchToProps = (dispatch, { avKey }) => ({
  fetchSearchResults: (query) => dispatch(fetchSearchResults(query, avKey)),
  clearSearchResults: () => dispatch(clearSearchResults()),
});

const Search = ({ fetchSearchResults, clearSearchResults }) => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length) fetchSearchResults(query);
    else clearSearchResults();
    setQuery('');
  };

  return (
    <form id="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        autoFocus
      />
      {/* {query.length > 0 && */}
      {/*  <button type='button' onClick={() => { */}
      {/*    clearSearchResults(); */}
      {/*    setQuery(''); */}
      {/*  }}> */}
      {/*    <GiCancel size={24} color='var(--st__neutral-fg3)'/> */}
      {/*  </button>} */}
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
