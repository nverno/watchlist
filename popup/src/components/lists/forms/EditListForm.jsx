import React from 'react';
import { connect } from 'react-redux';

import { clearListErrors, renameList } from '../../../actions/list_actions';
import './edit-list-form.scss';

const mapStateToProps = (state, _ownProps) => ({
  errors: state.errors.lists,
});

const mapDispatchToProps = (dispatch, { name }) => ({
  renameList: (newName) => dispatch(renameList(name, newName)),
  clearListErrors: () => dispatch(clearListErrors()),
});

const EditListForm = ({
  errors,
  name,
  setEditing,
  validate,
  renameList,
  clearListErrors,
}) => {
  const [listName, setListName] = React.useState(name);

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

  return (
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
};

export default connect(mapStateToProps, mapDispatchToProps)(EditListForm);
