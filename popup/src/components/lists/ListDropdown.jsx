import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsListCheck } from 'react-icons/bs';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import EditListModal from './modal/EditListModal';

const ListDropdown = ({ list, removeList, toggleEdit }) => {
  const [open, setOpen] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const toggleEditModal = () => setEditModal(!editModal);
  const toggle = () => setOpen(!open);

  return (
    <>
      <ButtonDropdown isOpen={open} toggle={toggle} direction="down">
        <DropdownToggle
          color="transparent"
          className="list-dropdown-toggle"
          data-toggle="modal"
        >
          <BiDotsHorizontalRounded size={24} color="transparent" />
        </DropdownToggle>

        <DropdownMenu className="list-dropdown-menu" right={true}>
          <DropdownItem onClick={removeList}>
            <span>
              <TiDeleteOutline size={24} />
            </span>
            Delete List
          </DropdownItem>

          <DropdownItem onClick={toggleEdit}>
            <span>
              <AiOutlineEdit size={24} />
            </span>
            Rename List
          </DropdownItem>

          <DropdownItem onClick={() => setEditModal(true)}>
            <span>
              <BsListCheck size={24} />
            </span>
            Edit List
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>

      {/* Note: modal body outside of dropdown so click isn't handled by
       * dropdown */}
      <EditListModal list={list} open={editModal} toggle={toggleEditModal} />
    </>
  );
};

export default ListDropdown;
