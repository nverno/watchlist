import React from 'react';
import './search-menu.scss';

const SearchMenuItem = ({ value, symbol, name, type, region }) => {
  return (
    <div className="search-result" value={value} role="option">
      <div className="search-result-symbol">
        <span>
          {symbol.map((part, idx) => (
            <span key={idx} className={part.match ? 'search-match' : ''}>
              {part.value}
            </span>
          ))}
        </span>
        <div className="search-result-company">
          <span>
            {name.map((part, idx) => (
              <span className={part.match ? 'search-match' : ''}>
                {part.value}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

const SearchMenuSection = ({ name, results }) => {
  return (
    <>
      <section>
        <h4>{name}</h4>
      </section>
      {results.map((result, idx) => (
        <SearchMenuItem {...result} key={idx} />
      ))}
    </>
  );
};

const SearchMenu = ({ stocks, funds }) => {
  const menu = !(stocks || funds) ? (
    <></>
  ) : (stocks && stocks.length) || (funds && funds.length) ? (
    <div className="search-results">
      {stocks && <SearchMenuSection name={'Stocks'} results={stocks} />}
      {stocks && <SearchMenuSection name={'Funds'} results={funds} />}
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

export default SearchMenu;
