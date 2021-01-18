import React from 'react';
import { connect } from 'react-redux';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import ListDropdown from './ListDropdown';
import ListCell from './ListCell';
import {
  closeList,
  openList,
  updateList,
  clearListErrors,
  removeList,
  renameList,
} from '../../actions/list_actions';
import { fetchQuotes } from '../../actions/stock_actions';
import { getList } from '../../selectors/lists';

const mapStateToProps = (state, { name }) => {
  const lst = getList(name, state.entities.lists);
  return {
    open: Boolean(state.ui.lists[name]),
    items: (lst && lst.items) || [],
    apiKey: state.settings.keys['iex'],
    errors: state.errors.lists,
  };
};

const mapDispatchToProps = (dispatch, { name }) => ({
  closeList: () => dispatch(closeList(name)),
  openList: () => dispatch(openList(name)),
  fetchQuotes: (symbols, params, apiKey) =>
    dispatch(fetchQuotes(symbols, params, apiKey)),
  updateList: (items) => dispatch(updateList({ name, items })),
  removeList: () => dispatch(removeList(name)),
  renameList: (newName) => dispatch(renameList(name, newName)),
  clearListErrors: () => dispatch(clearListErrors()),
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
  name,
  handle,
  items,
  open,
  openList,
  closeList,
  updateList,
  fetchQuotes,
  renameList,
  removeList,
  apiKey,
  errors,
  validate,
  clearListErrors,
}) => {
  React.useEffect(() => {
    if (apiKey && open) fetchQuotes(items, {}, apiKey);
  }, []);

  const [editing, setEditing] = React.useState(false);
  const [listName, setListName] = React.useState(name);

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

  const onSortEnd = ({ oldIndex, newIndex }) => {
    updateList(arrayMove(items, oldIndex, newIndex));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listName === name || validate(listName)) {
      if (listName !== name) renameList(listName);
      setEditing(false);
      setListName('');
      clearListErrors();
    }
  };

  const renderErrors = () => {
    if (!errors.length) return null;
    return (
      <ul>
        {errors.map((error, idx) => (
          <li key={idx} className="error-message">
            {error}
          </li>
        ))}
      </ul>
    );
  };

  const editForm = (
    <>
      <div>
        <form className="list-edit-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={listName}
            onChange={(e) => setListName(e.currentTarget.value)}
            autoFocus
          />
        </form>
        {renderErrors()}
      </div>
    </>
  );

  return (
    <React.Fragment key={name}>
      <div className="list-item list-header-cell">
        <div className="list-title">
          {handle}
          {editing ? editForm : <span>{name}</span>}
        </div>

        <div className="list-controls">
          <ListDropdown
            name={name}
            removeList={removeList}
            editList={() => setEditing(true)}
          />
          <div onClick={toggleList}>{caret}</div>
        </div>
      </div>

      {open && <SortableList items={items} onSortEnd={onSortEnd} />}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
