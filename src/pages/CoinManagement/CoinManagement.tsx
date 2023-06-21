import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/* Mui Iconset */
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import RuleIcon from "@mui/icons-material/Rule";
import GroupIcon from "@mui/icons-material/Group";
import Sidebar from "../../components/Sidebar/Sidebar";

const CoinManagement = () => {


  return (
    <div className="user-management">
      <Container fluid>
        <Row>
          <Col md={1} xs={1} className="p-0">
            <Sidebar />
          </Col>
          <Col md={11} xs={11}>
            <Row>
            <div className="mb-4">
              <h3>Coin Management</h3>
            </div>
            </Row>
            <Row className="dashboard-box-group">
              <Col xs={6} md={4}>
                <Link
                  to={"/user-management/user-groups"}
                  className="text-decoration-none"
                >
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip id="button-tooltip-2">View user groups.</Tooltip>
                    }
                  >
                    <div className="dashboard-box p-3 shadow mb-5 bg-white rounded border-top-primary">
                      <h5>User Groups</h5>
                      <p>View User Groups</p>
                      <GroupIcon fontSize="large" color="primary" />
                    </div>
                  </OverlayTrigger>
                </Link>
              </Col>

              <Col xs={6} md={4}>
              <Link
                  to={"/user-management/users"}
                  className="text-decoration-none"
                >
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-2">View user roles.</Tooltip>
                  }
                >
                  <div className="dashboard-box p-3 shadow mb-5 bg-white rounded border-top-secondary">
                    <h5>Users</h5>
                    <p>Control your Users</p>
                    <SupervisedUserCircleIcon
                      fontSize="large"
                      color="secondary"
                    />
                  </div>
                </OverlayTrigger>
                </Link>
              </Col>
              <Col xs={6} md={4}>
              <Link
                  to={"/user-management/user-roles"}
                  className="text-decoration-none"
                >
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="button-tooltip-2">View user roles.</Tooltip>
                  }
                >
                  <div className="dashboard-box p-3 shadow mb-5 bg-white rounded border-top-success">
                    <h5>User Roles</h5>
                    <p>View User Roles</p>
                    <RuleIcon fontSize="large" />
                  </div>
                </OverlayTrigger>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CoinManagement;
