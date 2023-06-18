import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import BadgeIcon from "@mui/icons-material/Badge";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonPinIcon from "@mui/icons-material/PersonPin";


const UserMenu = () => {
  return (
    <Dropdown className="d-inline user-menu ms-2" align="end">
      <Dropdown.Toggle className="btn-light">
        <PersonPinIcon />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/profile">
          <BadgeIcon /> Profile
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/user-management">
          <BadgeIcon /> Coin Management
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/rule-management">
          <BadgeIcon />Test
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          <LogoutIcon /> Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserMenu;
