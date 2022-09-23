import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  //css section
  const Wrapper = styled.div`
    ul li {
      font-weight: bold;
    }
    .bg-light {
      background-color: #a05;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23d23d09' fill-opacity='0.6'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
    }
    div nav div ul li {
      color: white;
      font-weight: 700;
    }
  `;
  return (
    <Wrapper>
      <nav className="navbar navbar-dark bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.png" alt="" width="30" height="30" />
          </Link>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item display-5">Pepy Food Recipe</li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
}

export default Header;
