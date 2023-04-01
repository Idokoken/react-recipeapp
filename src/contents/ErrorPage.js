// JavaScript Document
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 230px);
  font-family: "Roboto", sans-serif;
  background-image: url("/images/error.jpeg");
  background-size: 100% 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    /* font-family: "Poppins", sans-serif; */
    font-weight: 600;
    font-size: 35px;
  }
  .back {
    background-color: black;
    color: white;
  }
`;

function ErrorPage() {
  return (
    <Wrapper className="">
      <h3>Error 404</h3>
      <Link to="/" className="btn mt-5 back">
        Go back to Homepage
      </Link>
    </Wrapper>
  );
}

export default ErrorPage;
