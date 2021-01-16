import React from 'react';
import { AiOutlineClose, AiOutlineSend } from 'react-icons/ai';
import { ImArrowRight } from 'react-icons/im';

import './list-form.scss';

export const ListForm = ({ listName, action, cancel, errors }) => {
  const [name, setName] = React.useState(listName || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action(name);
    setName('');
  };

  const renderErrors = () => {
    return (
      <ul className="errors">
        {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );
  };

  return (
    <div className="list-form-container">
      <form onSubmit={(e) => handleSubmit(e)} className="list-form">
        <input
          type="text"
          className="list-input"
          value={name}
          placeholder="List Name"
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <div className="list-form-controls">
          <button type="submit">
            <ImArrowRight color="var(--st__semantic-success-base)" />
          </button>
          <button type="button" onClick={cancel}>
            <AiOutlineClose color="var(--st__semantic-error-base)" />
          </button>
        </div>
      </form>

      {renderErrors()}
    </div>
  );
};

export default ListForm;
