import React from 'react';
import { connect } from 'react-redux';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

import ListCell from './ListCell';
import { closeList, openList } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => ({
  open: Boolean(state.ui.lists[ownProps.name]),
  items: state.entities.lists[ownProps.name],
});

const mapDispatchToProps = (dispatch, { name }) => ({
  closeList: () => dispatch(closeList(name)),
  openList: () => dispatch(openList(name)),
});

const List = ({ name, items, open, openList, closeList }) => {
  const caret = (
    <span className="list-caret">
      {!open ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
    </span>
  );

  const toggleList = () => {
    if (open) closeList();
    // TODO: fetch list data here??
    else openList();
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
