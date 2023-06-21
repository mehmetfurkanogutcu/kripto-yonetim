import React from "react";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/* Iconset */
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import { common } from "@mui/material/colors";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="bg-dark sidebar-border-radius sticky-top">
      <OverlayTrigger
        placement="right"
        overlay={<Tooltip id="button-tooltip-2">Home</Tooltip>}
      >
        <a href="/" className="nav-link py-3 border-bottom">
          {" "}
          <HomeIcon
            fontSize="medium"
            sx={{ color: common["white"], "&:hover": { color: "gray" } }}
          />
        </a>
      </OverlayTrigger>
      <Nav.Link className="nav-link py-3 border-bottom">
        {" "}
        <LocalFireDepartmentIcon
          fontSize="medium"
          sx={{ color: common["white"] }}
        />
      </Nav.Link>
      <Nav.Link eventKey="link-2" className="nav-link py-3 border-bottom">
        <BuildIcon fontSize="medium" sx={{ color: common["white"] }} />
      </Nav.Link>
      <Nav.Link eventKey="link-2" className="nav-link py-3 border-bottom">
        <ContactSupportIcon fontSize="medium" sx={{ color: common["white"] }} />
      </Nav.Link>
      <Nav.Link eventKey="link-2" className="nav-link py-3 border-bottom">
        <WifiTetheringIcon fontSize="medium" sx={{ color: common["white"] }} />
      </Nav.Link>
      <Nav.Link eventKey="link-2" className="nav-link py-3">
        <LocalFireDepartmentIcon
          fontSize="medium"
          sx={{ color: common["white"] }}
        />
      </Nav.Link>
    </div>
  );
};

export default Sidebar;
