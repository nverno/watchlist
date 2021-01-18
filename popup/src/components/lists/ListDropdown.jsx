import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlineEdit } from 'react-icons/ai';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const ListDropdown = ({ name, removeList, editList }) => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen(!open);

  return (
    <ButtonDropdown isOpen={open} toggle={toggle} direction="down">
      <DropdownToggle color="transparent" className="list-dropdown-toggle">
        <BiDotsHorizontalRounded size={24} color="transparent" />
      </DropdownToggle>
      <DropdownMenu className="list-dropdown-menu" right={true}>
        <DropdownItem onClick={removeList}>
          <span>
            <TiDeleteOutline size={24} />
          </span>
          Delete List
        </DropdownItem>
        <DropdownItem onClick={editList}>
          <span>
            <AiOutlineEdit size={24} />
          </span>
          Rename List
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default ListDropdown;
