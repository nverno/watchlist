import React from 'react';

const ListItem = ({ item, ...props }) => {
  return <div className="list-item"></div>;
};

const List = ({ name, items, ...props }) => {
  return (
    <li>
      {name}
      {/* <li className="list-header">{name}</li> */}
      {items.map((item, idx) => (
        <ListItem item={item} key={idx} />
      ))}
    </li>
  );
};

export default List;
