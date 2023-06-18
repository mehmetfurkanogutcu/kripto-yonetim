import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import AppsIcon from "@mui/icons-material/Apps";
import { common } from "@mui/material/colors";
import "./LeftMenu.scss";
import LeftMenuItem from "./LeftMenuItem";
import items from "../../assets/data/left-menu.json"



const LeftMenu = ({ ...props }) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} variant="link" className="me-2">
        <AppsIcon fontSize="medium" sx={{ color: common["white"] }} />
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <div className="left-menu">
        <Offcanvas.Body>
        { items?.map((item, index) => <LeftMenuItem key={index} item={item} />) }
       
        </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
};

function LeftOffCanvas() {
  return (
    <>
      {["start"].map((placement, idx) => (
        <LeftMenu key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default LeftOffCanvas;
