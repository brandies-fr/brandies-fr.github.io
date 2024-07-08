import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import youtube from "../assets/images/youtube.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import { HeaderIcons } from "./HeaderIcons";

const COLORS = {
  primaryDark: "#fde602",
  primaryLight: "#4b1e10",
  backgroundDark: "#fde602",
  backgroundLight: "#000",
  menugradienttop: "rgba(105, 54,11,0.95)",
  menegradientBottom: "rgba(220,175,34,0.95)",
};

const MenuLabel = styled.label`
  background-color: ${COLORS.primaryDark};
  position: fixed;
  top: 1.5rem;
  right: 2.5rem;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const NavBackground = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 2.5rem;
  background-image: linear-gradient(
    135deg,
    ${COLORS.menugradienttop},
    ${COLORS.menegradientBottom}
  );
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(100)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 1.5rem;
  height: 2px;
  display: inline-block;
  margin-top: 1.2rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 1.5rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.4rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.4rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 2rem;
  font-weight: 300;
  text-decoration: none;
  color: #fde602;
  padding: 1rem 2rem;

  background-image: linear-gradient(
    60deg,
    transparent 0%,
    transparent 50%,
    #321e05 50%
  );
  background-size: 240%;
  transition: all 0.8s;
  padding: 0.5rem;

  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setShowSocialIcons(!showSocialIcons); // Toggle social icons visibility
  };

  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li className="font-Trojan">
            <ItemLink onClick={handleClick} to="/">
              Home
            </ItemLink>
          </li>
          <li className="font-Trojan">
            <ItemLink onClick={handleClick} to="/whoweare">
              Who We Are
            </ItemLink>
          </li>
          <li className="font-Trojan">
            <ItemLink onClick={handleClick} to="/ambition">
              Ambition
            </ItemLink>
          </li>
          <li className="font-Trojan">
            <ItemLink onClick={handleClick} to="/cepages">
              Cepages
            </ItemLink>
          </li>
          <li className="font-Trojan">
            <ItemLink onClick={handleClick} to="/products">
              Products
            </ItemLink>
          </li>
          <li className="font-Trojan">
            <ItemLink onClick={handleClick} to="/contact">
              Contact
            </ItemLink>
          </li>
        </List>
        {showSocialIcons && (
          <div className="social-media-icons">
            <ul>
              <li className="ss_facebook">
                <a href="https://www.facebook.com/brandies.fr" target="_blank">
                  <img className="img-fluid" src={facebook} alt="Facebook" />
                </a>
              </li>
              <li className="ss_insta">
                <a href="https://www.instagram.com/brandies.fr/" target="_blank">
                  <img className="img-fluid" src={twitter} alt="Instagram" />
                </a>
              </li>
              <li className="ss_whatsapp">
                <a href="https://wa.me/+33780911065" target="_blank">
                  <img className="img-fluid" src={youtube} alt="WhatsApp" />
                </a>
              </li>
            </ul>
          </div>
        )}
       
      </Navigation>
    </>
  );
}

export default HamburgerMenu;
