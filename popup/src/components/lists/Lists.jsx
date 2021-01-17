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
import NewListForm from './ListForm';
import {
  removeList,
  createList,
  receiveLists,
} from '../../actions/list_actions';
import './lists.scss';

const mapStateToProps = (state, _ownProps) => ({
  lists: state.entities.lists,
});

const mapDispatchToProps = (dispatch) => ({
  removeList: (name) => dispatch(removeList(name)),
  createList: (name) => dispatch(createList(name)),
  updateLists: (lists) => dispatch(receiveLists(lists)),
});

const DragHandle = SortableHandle(() => (
  <span className="drag-burger">
    <GiHamburgerMenu size={24} color="var(--st__neutral-fg2)" />
  </span>
));

const SortableItem = SortableElement(({ name }) => (
  <List name={name} handle={<DragHandle />} />
));

const SortableList = SortableContainer(({ lists }) => {
  return (
    <div>
      {lists.map(({ name }, idx) => (
        <SortableItem key={`list-item-${name}`} index={idx} name={name} />
      ))}
    </div>
  );
});

const Lists = ({ lists, removeList, createList, updateLists }) => {
  const [formOpen, setFormOpen] = React.useState(false);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    updateLists(arrayMove(lists, oldIndex, newIndex));
  };

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

        <SortableList lists={lists} onSortEnd={onSortEnd} useDragHandle />
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
