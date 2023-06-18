import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

/* Iconset */
import AttractionsRoundedIcon from "@mui/icons-material/AttractionsRounded";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import BusinessIcon from "@mui/icons-material/Business";
import DashboardIcon from "@mui/icons-material/Dashboard";

import "./Dashboard.scss";
import Sidebar from "../Sidebar/Sidebar";
import TopCoins from "../TopCoins/TopCoins";
import PopularCoins from "../PopularCoins/PopularCoins";
import LowVolumeCoins from "../LowVolumeCoins/LowVolumeCoins";
import CryptoPrices from "../CryptoPrices/CryptoPrices";
import MidVolumeCoins from "../MidVolumeCoins/MidVolumeCoins";
import HighestBidCoins from "../HighestBidCoins/HighestBidCoins";
import CryptoInfo from "../CryptoInfo/CryptoInfo";



const Dashboard = () => {
  return (
    <div className="dashboard text-center">
      <Container fluid>
        <Row>
          <Col md={1} xs={1} className="p-0">
            <Sidebar />
          </Col>
          <Col md={11} xs={11}>
            <Row>
              <CryptoInfo/>
            </Row>
            <Row className="dashboard-box-group">
              <Col md={6} sx={12}>
                <Row>
                  <p className="lead">
                    Kripto <mark>yönetim</mark> paneline hoşgeldiniz..
                  </p>

                  <Col xs={6} md={6}>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="button-tooltip-2">
                          Configure your database connections
                        </Tooltip>
                      }
                    >
                      <div className="dashboard-box p-3 shadow mb-3 bg-white rounded border-top-warning">
                        <h5>Borsa Bağlantıları</h5>
                        <WifiTetheringIcon fontSize="large" color="info" />
                      </div>
                    </OverlayTrigger>
                  </Col>

                  <Col xs={6} md={6}>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="button-tooltip-2">
                          Control your Users
                        </Tooltip>
                      }
                    >
                      <div className="dashboard-box p-3 shadow mb-3 bg-white rounded border-top-primary">
                        <h5>Kripto Paralar</h5>
                        <SupervisedUserCircleIcon
                          fontSize="large"
                          color="primary"
                        />
                      </div>
                    </OverlayTrigger>
                  </Col>

                  <Col xs={6} md={6}>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="button-tooltip-2">
                          Customize or Create Automated Business
                        </Tooltip>
                      }
                    >
                      <div className="dashboard-box p-3 shadow mb-3 bg-white rounded border-top-danger">
                        <h5>Portfolyöm</h5>
                        <BusinessIcon fontSize="large" color="success" />
                      </div>
                    </OverlayTrigger>
                  </Col>

                  <Col xs={6} md={6}>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="button-tooltip-2">
                          Create / Customize Actions
                        </Tooltip>
                      }
                    >
                      <div className="dashboard-box p-3 shadow mb-3 bg-white rounded border-top-success">
                        <h5>Aksiyon Listesi</h5>

                        <AttractionsRoundedIcon fontSize="large" />
                      </div>
                    </OverlayTrigger>
                  </Col>

                  <Col xs={6} md={6}>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="button-tooltip-2">
                          View Business Controls Rule Results
                        </Tooltip>
                      }
                    >
                      <div className="dashboard-box p-3 shadow mb-3 bg-white rounded border-top-secondary">
                        <h5>Raporlar</h5>
                        <AssessmentIcon fontSize="large" color="secondary" />
                      </div>
                    </OverlayTrigger>
                  </Col>

                  <Col xs={6} md={6}>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="button-tooltip-2">
                          Defined boards respect to the Processes
                        </Tooltip>
                      }
                    >
                      <div className="dashboard-box p-3 shadow mb-3 bg-white rounded border-top-dark">
                        <h5>Hesabım</h5>
                        <DashboardIcon fontSize="large" color="error" />
                      </div>
                    </OverlayTrigger>
                  </Col>
                </Row>
              </Col>
              <Col md={6} sx={12}>
               <CryptoPrices/>
              </Col>
            </Row>
            <Row className="dashboard-box-group">
              <Col md={6} sx={12}>
                <TopCoins/>
              </Col>
              <Col md={6} sx={12}>
                <PopularCoins/>
              </Col>
            </Row>
            <Row className="dashboard-box-group">
            <Col md={6} sx={12}>
                <LowVolumeCoins/>
              </Col>
              <Col md={6} sx={12}>
                <MidVolumeCoins/>
              </Col>
              </Row>

              <Row className="dashboard-box-group">
            <Col md={12} sx={12}>
                <HighestBidCoins/>
              </Col>
              
              </Row>
              <Row className="dashboard-box-group">
            <Col md={12} sx={12}>
               
              </Col>
              
              </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
