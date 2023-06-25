import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import InboxIcon from "@mui/icons-material/Inbox";
import LeftOffCanvas from "../LeftMenu/LeftMenu";
import UserMenu from "../UserMenu/UserMenu";

const Header = () => {

  return (
    <header className="topbar-border mb-4">
      <Navbar variant="dark" bg="dark" expand="lg" className="sticky-top">
        <Container fluid>
          <LeftOffCanvas />
          <Navbar.Brand href="/" className="title">
           Kripto Paneli
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Help</Nav.Link>
              <Nav.Link href="/coin-management/monthly-price-analysis-chart">Aylık Fiyat Analiz Tablosu</Nav.Link>
              <Nav.Link href="/coin-management/moving-averages">Hareketli Ortalama(MA)</Nav.Link>
              <Nav.Link href="/coin-management/coin-analysis">Kripto Para Analizi</Nav.Link>
              <Nav.Link href="/coin-management/coin-tracker">Anlık Kripto Takip</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="button-tooltip-2">Inbox</Tooltip>}
          >
            <Button variant="light" className="d-none">
              <InboxIcon />
              (5)
            </Button>
          </OverlayTrigger>
          <UserMenu />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
