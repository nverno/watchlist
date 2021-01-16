import React from 'react';
import { connect } from 'react-redux';

import List from './List';
import NewListForm from './ListForm';
import { removeList, createList } from '../../actions/list_actions';

const mapStateToProps = (state, _ownProps) => ({
  lists: state.entities.lists,
});

const mapDispatchToProps = (dispatch) => ({
  removeList: (name) => dispatch(removeList(name)),
  createList: (name) => dispatch(createList(name)),
});

const Lists = ({ lists, removeList, createList }) => {
  const [formOpen, setFormOpen] = React.useState(false);

  return (
    <>
      <div onClick={() => setFormOpen((formOpen) => !formOpen)}>
        <h3>Lists</h3>
      </div>
      <ul className="lists">
        {formOpen && (
          <li key={'new-list'}>
            <NewListForm
              listName=""
              action={createList}
              cancel={() => setFormOpen(false)}
            />
          </li>
        )}
        {Object.entries(lists).map(([name, items], idx) => (
          <List key={idx} name={name} items={items} />
        ))}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
