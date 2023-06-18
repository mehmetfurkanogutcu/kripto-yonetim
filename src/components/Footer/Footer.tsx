import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container-fluid">
        <div className="border-top py-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <span className="small text-muted">
                Copyright 2023 © Coins Project. All rights reserved. Powered by
                <Link to={"/"} className="text-decoration-none">
                  TEST
                </Link>
                .
              </span>
            </div>
            <div className="col-md-6">
              <ul className="list-inline text-md-end mb-0 small mt-3 mt-md-0">
                <li className="list-inline-item text-muted">Follow us on</li>
                <li className="list-inline-item me-1">
                  <a href="#!" className="btn btn-xs btn-social btn-icon">
                    <FacebookIcon />
                  </a>
                </li>
                <li className="list-inline-item me-1">
                  <a href="#!" className="btn btn-xs btn-social btn-icon">
                    <TwitterIcon />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="btn btn-xs btn-social btn-icon">
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
