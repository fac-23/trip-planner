import React from "react";
import arrowBack from "../assets/images/arrow-back.png";
import home from "../assets/images/home.png";
import { useNavigate } from "react-router-dom";
// import styles from "styled-components";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
// import { transformWithEsbuild } from "vite";
// import StyledLink from "./StyledLink";

const tabs = [
  {
    route: "/my-documents",
    icon: faFilePdf,
    label: "My Documents",
  },
  {
    route: "/my-trips",
    icon: faUmbrellaBeach,
    label: "My Trips",
  },
];

function Layout({ pageTitle }) {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="top-navigation">
        <button onClick={() => navigate(-1)} className="arrowBack">
          <img src={arrowBack} className="arrowBack--img"></img>
        </button>
        <Link to={"/"}>
          <img src={home} className="home" />
        </Link>
        <h1>{pageTitle}</h1>
      </nav>

      <nav className="bottom-navigation">
        <Nav>
          <div className="bottomNavlinks">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route}>
                  <div className="iconBox stack-sm">
                    <FontAwesomeIcon
                      className="icons"
                      size="lg"
                      icon={tab.icon}
                    />
                    <div>{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
}

export default Layout;
