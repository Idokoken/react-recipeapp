import React from "react";
import styled from "styled-components";

//css section
const Wrapper = styled.div`
  background-color: rgba(217, 217, 217, 1);
  padding-top: 10px;
  margin-bottom: 0;

  h4 {
    margin-left: 20px;
    font-family: "Rampart One", cursive;
  }

  .footericon {
    display: flex;
    align-items: center;
    margin: 20px;
  }
  .icon {
    margin-right: 20px;
    border: 2px solid black;
    padding: 5px;
    border-radius: 7px;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .copywright {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rule {
    border: 2px solid black;
    margin: 10px 0;
  }
  p {
    font-weight: 400;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <h4>Pepy-recipe</h4>
      <div className="footericon">
        <div className="icon">
          <i className="fa-brands fa-facebook"></i>
        </div>
        <div className="icon">
          <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="icon">
          <i className="fa-brands fa-youtube"></i>
        </div>
        <div className="icon">
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>

      <hr className="rule" />
      <div className="copywright">
        <p className="">
          <em>Copywrite &copy; Pepy-Recipe, All Right Reserved</em>
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;
