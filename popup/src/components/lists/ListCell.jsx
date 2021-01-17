import React from 'react';
import { connect } from 'react-redux';

import { quotePercent, quotePrice, quoteClass } from '../../selectors/quotes';

const mapStateToProps = (state, { symbol }) => ({
  quote: state.entities.quotes[symbol],
});

const PercentChange = ({ quote }) => {
  const cname = quoteClass(quote);
  return <span className={cname}>{quotePercent(quote)}</span>;
};

const ListCell = ({ symbol, quote }) => {
  return (
    <div className="list-item">
      <span>{symbol.toUpperCase()}</span>

      <div className="list-chart-container">--chart--</div>

      <div className="quote-price">
        <span>{quotePrice(quote)}</span>
        <div style={{ height: '2px' }} />
        <PercentChange quote={quote} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(ListCell);
