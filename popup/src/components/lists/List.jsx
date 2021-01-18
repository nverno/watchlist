import React from 'react';
import { connect } from 'react-redux';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import EditListForm from './forms/EditListForm';
import ListDropdown from './ListDropdown';
import ListCell from './ListCell';
import {
  closeList,
  openList,
  updateList,
  removeList,
} from '../../actions/list_actions';
import { maybeFetchQuotes } from '../../actions/stock_actions';
// import { getList } from '../../selectors/lists';

const mapStateToProps = (state, { list }) => {
  // const list = getList(name, state.entities.lists);
  return {
    open: Boolean(state.ui.lists[list.name]),
    // items: (list && list.items) || [],
    quotes: state.entities.quotes,
    apiKey: state.settings.keys['iex'],
  };
};

const mapDispatchToProps = (dispatch, { list: { name } }) => ({
  closeList: () => dispatch(closeList(name)),
  openList: () => dispatch(openList(name)),
  maybeFetchQuotes: (symbols, quotes, params, apiKey) => {
    return dispatch(maybeFetchQuotes(symbols, quotes, params, apiKey));
  },
  updateList: (items) => dispatch(updateList({ name, items })),
  removeList: () => dispatch(removeList(name)),
});

const SortableItem = SortableElement(({ symbol }) => (
  <ListCell symbol={symbol} />
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      {items.map((symbol, idx) => (
        <SortableItem symbol={symbol} key={`item-${symbol}`} index={idx} />
      ))}
    </div>
  );
});

const List = ({
  list,
  handle,
  quotes,
  open,
  openList,
  closeList,
  updateList,
  maybeFetchQuotes,
  removeList,
  apiKey,
  validate,
}) => {
  const { name, items } = list;

  React.useEffect(() => {
    // FIXME: when multiple lists are open, concurrent fetches can be
    // made for the same symbols (only a problem on initial load?)
    if (apiKey && open) maybeFetchQuotes(items, quotes, {}, apiKey);
  }, []);

  const [editing, setEditing] = React.useState(false);

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
      apiKey && maybeFetchQuotes(items, quotes, {}, apiKey);
      openList();
    }
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    updateList(arrayMove(items, oldIndex, newIndex));
  };

  if (!list) return null;
  return (
    <React.Fragment key={name}>
      <div className="list-item list-header-cell">
        <div className="list-title">
          {handle}
          {editing ? (
            <EditListForm
              name={name}
              validate={validate}
              setEditing={setEditing}
            />
          ) : (
            <span>{name}</span>
          )}
        </div>

        <div className="list-controls">
          <ListDropdown
            list={list}
            removeList={removeList}
            toggleEdit={() => setEditing(true)}
          />
          <div onClick={toggleList}>{caret}</div>
        </div>
      </div>

      {open && <SortableList items={items} onSortEnd={onSortEnd} />}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
