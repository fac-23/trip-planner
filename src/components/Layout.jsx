import React from "react";
import arrowBack from "../assets/images/arrow-back.png";
import home from "../assets/images/home.png";
import { useNavigate } from "react-router-dom";
import styles from "styled-components";
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
      <nav className="top-navigation" role="navigation">
        <button className={styles.btn} onClick={() => navigate(-1)}>
          <img src={arrowBack} className="arrow-back"></img>
        </button>
        <button className={styles.btn}>
          <Link to={"/"}>
            <img src={home} className="home" />
          </Link>
        </button>
        <h1>{pageTitle}</h1>
      </nav>

      <nav
        className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav"
        role="navigation"
      >
        <Nav className="w-100">
          <div className="links">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon} />
                    <div>{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>

    // <Link to={"/my-documents"}></Link>
    // <Link to={"/my-trips"}></Link>
  );
}

export default Layout;
