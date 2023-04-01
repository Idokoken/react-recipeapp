import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//css section
const Wrapper = styled.div`
  .bg-light {
    background-color: rgba(183, 22, 22, 0.8) !important;
    color: white;
  }
  nav div ul li {
    /* color: white; */
    font-weight: 700;
    font-size: 24px;
    font-family: "Rampart One", cursive;
  }
`;

function Header() {
  return (
    <Wrapper>
      <nav className="navbar navbar-dark bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="/images/logo.png"
              alt=""
              width="30"
              height="30"
              className="ms-3"
            />
          </Link>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">Pepy-recipe</li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
}

export default Header;
