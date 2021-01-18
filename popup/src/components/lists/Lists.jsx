import React from 'react';
import { connect } from 'react-redux';
import { AiOutlinePlus } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  SortableHandle,
  SortableContainer,
  SortableElement,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import List from './List';
import NewListForm from './forms/ListForm';
import {
  createList,
  receiveLists,
  validateList,
  receiveListErrors,
} from '../../actions/list_actions';
import './lists.scss';

const mapStateToProps = (state, _ownProps) => ({
  lists: state.entities.lists,
});

const mapDispatchToProps = (dispatch) => ({
  createList: (name) => dispatch(createList(name)),
  updateLists: (lists) => dispatch(receiveLists(lists)),
  validateList: (newList, lists) => {
    let errors = validateList(newList, lists);
    if (errors.length) {
      dispatch(receiveListErrors(errors));
      return false;
    }
    return true;
  },
});

const DragHandle = SortableHandle(() => (
  <span className="drag-burger">
    <GiHamburgerMenu size={24} color="var(--st__neutral-fg2)" />
  </span>
));

const SortableItem = SortableElement(({ list, validate }) => (
  <List list={list} handle={<DragHandle />} validate={validate} />
));

const SortableList = SortableContainer(({ lists, validate }) => {
  return (
    <div>
      {lists.map((list, idx) => (
        <SortableItem
          key={`list-item-${list.name}`}
          index={idx}
          list={list}
          validate={validate}
        />
      ))}
    </div>
  );
});

const Lists = ({ lists, createList, updateLists, validateList }) => {
  const [formOpen, setFormOpen] = React.useState(false);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    updateLists(arrayMove(lists, oldIndex, newIndex));
  };

  const validate = (newList) => validateList(newList, lists);

  return (
    <>
      <div className="lists">
        <header>
          <div>
            <h4>WatchLists</h4>
          </div>
          <div onClick={() => setFormOpen((formOpen) => !formOpen)}>
            <AiOutlinePlus
              size={24}
              color="var(--st__neutral-fg2)"
              className="new-list-icon"
            />
          </div>
        </header>

        {formOpen && (
          <NewListForm
            listName=""
            action={createList}
            cancel={() => setFormOpen(false)}
          />
        )}

        <SortableList
          lists={lists}
          validate={validate}
          onSortEnd={onSortEnd}
          useDragHandle
        />
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
