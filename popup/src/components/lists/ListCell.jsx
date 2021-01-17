import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  // quote: state.entities.quotes[ownProps.symbol],
});

const ListCell = ({ symbol }) => {
  return (
    <div className="list-item">
      <span>{symbol.toUpperCase()}</span>

      <div className="list-chart-container">chart</div>

      <div>quote</div>
    </div>
  );
};

export default connect(mapStateToProps)(ListCell);
