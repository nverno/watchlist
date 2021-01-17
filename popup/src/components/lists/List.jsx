import React from 'react';
import { connect } from 'react-redux';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

import ListCell from './ListCell';
import { closeList, openList } from '../../actions/list_actions';
import { fetchQuotes } from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => ({
  open: Boolean(state.ui.lists[ownProps.name]),
  items: state.entities.lists[ownProps.name],
  apiKey: state.settings.keys['iex'],
});

const mapDispatchToProps = (dispatch, { name }) => ({
  closeList: () => dispatch(closeList(name)),
  openList: () => dispatch(openList(name)),
  fetchQuotes: (symbols, params, apiKey) =>
    dispatch(fetchQuotes(symbols, params, apiKey)),
});

const List = ({
  name,
  items,
  open,
  openList,
  closeList,
  fetchQuotes,
  apiKey,
}) => {
  React.useEffect(() => {
    if (apiKey && open) fetchQuotes(items, {}, apiKey);
  }, []);

  if (!apiKey) {
    // FIXME: handle missing key- link to input
    console.warn('Must have iex API key to access quote data!');
  }

  const caret = (
    <span className="list-caret">
      {!open ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
    </span>
  );

  const toggleList = () => {
    if (open) closeList();
    else {
      // FIXME: only fetch necessary data
      apiKey && fetchQuotes(items, {}, apiKey);
      openList();
    }
  };

  return (
    <React.Fragment key={name}>
      <div className="list-item list-header-cell">
        <div>
          <span className="list-title">{name}</span>
        </div>

        <div className="list-controls">
          <button>
            <BiDotsHorizontalRounded
              size={24}
              color="transparent"
              /* color='var(--st__neutral-fg2)' */
            />
          </button>

          <div onClick={toggleList}>{caret}</div>
        </div>
      </div>

      {open &&
        items.map((symbol, idx) => <ListCell key={idx} symbol={symbol} />)}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
