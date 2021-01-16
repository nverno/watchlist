import React from 'react';

export const ListForm = ({ listName, action, cancel }) => {
  const [name, setName] = React.useState(listName);

  const handleSubmit = (e) => {
    e.preventDefault();
    action(name);
    setName('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="list-form">
      <input
        type="text"
        className="list-input"
        value={name}
        placeholder="List Name"
        onChange={(e) => setName(e.currentTarget.value)}
      />

      <div className="list-form-controls">
        <button type="button" onClick={cancel}>
          Cancel
        </button>
        <button type="submit">Create List</button>
      </div>
    </form>
  );
};

export default ListForm;
