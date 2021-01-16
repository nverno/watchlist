import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './search.scss';

const Search = () => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
      />
    </form>
  );
};

export default Search;
