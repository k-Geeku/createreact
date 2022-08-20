import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookSquare, FaTelegram } from "react-icons/fa";

const Footer = () => {
  const Wrapper = styled.section`
    .top {
      display: flex;
      transform: translateY(45px);
      background-color: rgb(249, 249, 255);
      border: 2px solid ${({ theme }) => theme.colors.border};
      border-radius: 1rem;
      justify-content: space-between;
      align-content: center;
      align-item: center;
      font-size: 2rem;
      width: 60vw;
      padding: 22px 23px;
      .last {
        margin-top: auto;
        border-radius: 0.5rem;
      }
    }
    .second {
      height: auto;
      min-height: 40vh;
      background-color: #0a1435;
      color: white;
      padding: 4rem 3rem;
      font-size: 16px;
      letter-spacing: 1px;
    }
    .grid > div {
      margin-top: 8rem;
    }
    form {
      display: flex;
      flex-direction: column;
    }
    .Email {
      height: 30px;
      padding: 12px;
      font-family: belgrado;
      letter-spacing: 1px;
    }
    .submit {
      margin-top: 10px;
      padding: 12px;
      background-color: rgb(98, 84, 243);
      color: rgb(255, 255, 255);
      font-family:belgrado;
        letter-spacing:1px;

    }
    .icons {
      display: flex;
      gap: 2rem;
    }
    .white {
      color: white;
      font-size: 26px;
      margin-top: 1rem;
    }
    .last{
        font-family:belgrado;
        letter-spacing:1px;
    }
    .dec{
        
    }
  `;
  return (
    <Wrapper>
      <center>
        <div className="top">
          <div className="one">
            Ready to get started ?<br /> Talk to us today 
          </div>
          <NavLink to="/">
            <Button className="last">Lets talk</Button>
          </NavLink>
        </div>
      </center>

      <div className="second ">
        <div className="center">
          <div className="grid grid-four-column">
            <div>
              Techi-vite <br />
              <br />
              Contact us for any query
            </div>
            <div>
              Subscribe us for updates
              <br />
              <br />
              <form action="https://formspree.io/f/myyvyrkn" method="POST"  >
                <input
                  type="email"
                  name="Email"
                  className="Email"
                  placeholder="Email"
                />
                <input
                  type="submit"
                  name="submit"
                  className="submit"
                  value="Subscribe"
                />
              </form>
            </div>
            <div>
              Follow us <br />
              <div className="icons">
                <div>
                  <FaInstagram className="white" />
                </div>
                <div>
                  <FaFacebookSquare className="white" />
                </div>
                <div>
                  <FaTelegram className="white" />
                </div>
              </div>
            </div>
            <div>
              Call us :- <br />
              <br />
              +911234678789
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        
          <center><div className="container grid grid-two-column">
            <p style={{color:'white',marginTop:'1rem'}}>@{new Date().getFullYear()} techi-vite .All rights reserved</p>
            <div style={{marginTop:'0.2rem'}}>
              <p style={{color:'white'}}>privacy policy</p>
              <p style={{color:'white'}}>terms and conditons</p>
            </div>
          </div></center>
        </div>
      
    </Wrapper>
  );
};

export default Footer;
