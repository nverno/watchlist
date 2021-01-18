import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { GiCancel } from 'react-icons/gi';

import { removeListItem } from '../../../actions/list_actions';
import './edit-list-modal.scss';

const mapStateToProps = (state, ownProps) => ({
  lists: state.entities.lists,
});

const mapDispatchToProps = (dispatch, { list }) => ({
  removeListItem: (symbol) => dispatch(removeListItem(list, symbol)),
});

const EditListModal = ({ list, open, toggle, removeListItem, ...props }) => {
  const { name, items } = list;
  return (
    <>
      <Modal isOpen={open} toggle={toggle} className="list-modal">
        <ModalHeader toggle={toggle}>Click to Remove</ModalHeader>
        <ModalBody className="list-modal-body">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="list-modal-item"
              onClick={(e) => {
                e.preventDefault();
                removeListItem(item);
              }}
            >
              <span>{item}</span>
              <div>
                <GiCancel size={24} color="var(--st__semantic-error-base)" />
              </div>
            </div>
          ))}
        </ModalBody>
      </Modal>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EditListModal);
