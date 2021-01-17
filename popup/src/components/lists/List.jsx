import React from 'react';
import { connect } from 'react-redux';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

import { closeList, openList } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => ({
  open: Boolean(state.ui.lists[ownProps.name]),
  items: state.entities.lists[ownProps.name],
});

const mapDispatchToProps = (dispatch, { name }) => ({
  closeList: () => dispatch(closeList(name)),
  openList: () => dispatch(openList(name)),
});

// const List = ({ name, items, ...props }) => {
//   return (
//     <React.Fragment key={name}>
//       {name}
//       {items && items.map((item, idx) => (
//         <ListItem item={item} key={idx} />
//       ))}
//     </React.Fragment>
//   );
// };

const List = ({ name, items, open, openList, closeList }) => {
  const caret = (
    <span className="list-caret">
      {!open ? <IoIosArrowUp size={24} /> : <IoIosArrowDown size={24} />}
    </span>
  );

  const toggleList = () => {
    if (open) closeList();
    // TODO: fetch list data here??
    else openList();
  };

  return (
    <React.Fragment key={name}>
      <div className="list-item list-header-cell">
        <div>
          <span>{name}</span>
        </div>

        <div className="list-controls">
          <button>
            <BiDotsHorizontalRounded
              size={24}
              color="transparent"
              /* color='var(--st__neutral-fg2)' */
            />
          </button>

          <div onClick={toggleList}>{caret}</div>
        </div>
      </div>

      {/* FIXME: */}
      {open && items.map((item, idx) => <li key={idx}>{item}</li>)}
    </React.Fragment>
  );
};

// const ListItem = ({ item, ...props }) => {
//   return <div className="list-item"></div>;
// };

export default connect(mapStateToProps, mapDispatchToProps)(List);
