import React from 'react';
import { connect } from 'react-redux';

import './search-menu.scss';
import ListSelectModal from '../lists/modal/ListSelectModal';
import { setCurrent, clearCurrent } from '../../actions/current_symbol_actions';
import { clearSearchResults } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  const { stocks, funds } = state.entities.searchResults;
  return {
    errors: state.errors.search,
    stocks,
    funds,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCurrent: (symbol) => dispatch(setCurrent(symbol)),
  clearCurrent: () => dispatch(clearCurrent()),
  clearSearchResults: () => dispatch(clearSearchResults()),
});

const SearchMenuItem = ({
  value,
  symbol,
  name,
  type,
  region,
  addable,
  ...props
}) => {
  const handleClick = (val) => {
    props.setCurrent(val);
    props.clearSearchResults();
  };

  return (
    <div
      className="search-result"
      value={value}
      role="option"
      /* onClick={() => handleClick(value)} */
    >
      <div className="search-result-symbol">
        <span>
          {symbol.map((part, idx) => (
            <span key={idx} className={part.match ? 'search-match' : ''}>
              {part.value}
            </span>
          ))}
        </span>
      </div>
      <div className="search-result-company">
        <span>
          {name.map((part, idx) => (
            <span key={idx} className={part.match ? 'search-match' : ''}>
              {part.value}
            </span>
          ))}
        </span>
      </div>

      {addable && (
        <div className="search-result-controls">
          <ListSelectModal symbol={value} />
        </div>
      )}
    </div>
  );
};

const SearchMenuSection = ({ name, results, addable, ...props }) => {
  return (
    <>
      <section>
        <h4>{name}</h4>
      </section>
      {results.map((result, idx) => (
        <SearchMenuItem {...result} key={idx} addable={addable} {...props} />
      ))}
    </>
  );
};

const SearchMenuErrors = ({ errors }) => {
  return (
    <ul>
      {errors.map((error, idx) => (
        <li className="error-message">{error}</li>
      ))}
    </ul>
  );
};

const SearchMenu = ({ errors, stocks, funds, ...props }) => {
  const menu = errors.length ? (
    <SearchMenuErrors errors={errors} />
  ) : !(stocks || funds) ? (
    <></>
  ) : (stocks && stocks.length) || (funds && funds.length) ? (
    <div className="search-results">
      {stocks.length && (
        <SearchMenuSection
          addable
          name={'Stocks'}
          results={stocks}
          {...props}
        />
      )}
      {funds.length > 0 && (
        <SearchMenuSection name={'Funds'} results={funds} {...props} />
      )}
    </div>
  ) : (
    <section>
      <h4>No matches founds</h4>
    </section>
  );

  return (
    <div className="fade-in">
      <div className="search-menu">{menu}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchMenu);
