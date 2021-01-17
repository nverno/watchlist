import React from 'react';
import { connect } from 'react-redux';
import { AiOutlinePlus } from 'react-icons/ai';

import List from './List';
import NewListForm from './ListForm';
import { removeList, createList } from '../../actions/list_actions';
import './lists.scss';

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
        {Object.keys(lists).map((name, idx) => (
          <List key={idx} name={name} />
        ))}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
