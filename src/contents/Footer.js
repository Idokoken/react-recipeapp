import React from "react";
import styled from "styled-components";

function Footer() {
  //css section
  const Wrapper = styled.div`
    background-color: rgb(185, 133, 133);
    color: white;
    padding-top: 20px;
    margin-bottom: 0;

    h4 {
      margin-left: 20px;
    }

    .footericon {
      display: flex;
      align-items: center;
      margin: 20px;
    }
    .icon {
      margin-right: 20px;
      border: 2px solid white;
      padding: 5px;
      border-radius: 10px;
    }
    .copywright {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
    }
    .rule {
      border: 2px solid black;
    }
  `;
  return (
    <Wrapper>
      <h4>Pepy Food</h4>
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
        <p className="text-center">
          &copy;
          <em> Created by Idokoken, All Right Reserved</em>
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;
