import React from 'react';
import { connect } from 'react-redux';
import { BiSearch } from 'react-icons/bi';

import './search.scss';
import { fetchSearchResults } from '../../actions/search_actions';

const mapStateToProps = (state, _ownProps) => ({
  avKey: state.settings.keys['avKey'],
});

const mapDispatchToProps = (dispatch, { avKey }) => ({
  fetchSearchResults: (query) => dispatch(fetchSearchResults(query, avKey)),
});

const Search = ({ fetchSearchResults }) => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.length) fetchSearchResults(query);
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
    </form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
