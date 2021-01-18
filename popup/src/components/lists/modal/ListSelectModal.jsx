import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { AiOutlinePlus } from 'react-icons/ai';
import { GiCheckMark } from 'react-icons/gi';

import { addToList, removeListItem } from '../../../actions/list_actions';
import { listContains } from '../../../selectors/lists';
import { maybeFetchQuotes } from '../../../actions/stock_actions';
import { clearSearchResults } from '../../../actions/search_actions';
import './list-modal.scss';

const mapStateToProps = (state, ownProps) => ({
  lists: state.entities.lists,
  apiKey: state.settings.keys['iex'],
  quotes: state.entities.quotes,
});

const mapDispatchToProps = (dispatch, { symbol }) => ({
  addToList: (list, quotes, apiKey) => {
    dispatch(addToList(list, [symbol]));
    dispatch(maybeFetchQuotes([symbol], quotes, {}, apiKey));
  },
  removeListItem: (list) => dispatch(removeListItem(list, symbol)),
  clearSearchResults: () => dispatch(clearSearchResults()),
});

const ListItem = ({
  list,
  symbol,
  apiKey,
  quotes,
  addToList,
  removeListItem,
}) => {
  const isMember = listContains(list, symbol);
  const handleClick = () => {
    if (isMember) removeListItem(list);
    else addToList(list, quotes, apiKey);
  };
  return (
    <div className="list-modal-item" onClick={handleClick}>
      <span>{list.name}</span>
      <div>
        {isMember && <GiCheckMark size={24} color="var(--st__primary-base)" />}
      </div>
    </div>
  );
};

const ListSelectModal = ({ symbol, lists, ...props }) => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <button type="button" onClick={toggle} className="list-modal-toggle">
        <AiOutlinePlus
          size={24}
          color="transparent"
          className="add-symbol-icon"
        />
      </button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="list-modal"
        onClosed={() => props.clearSearchResults()}
      >
        <ModalHeader
          toggle={toggle}
        >{`Click List to add ${symbol}`}</ModalHeader>
        <ModalBody className="list-modal-body">
          {lists.map((list, idx) => (
            <ListItem key={idx} symbol={symbol} list={list} {...props} />
          ))}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSelectModal);
