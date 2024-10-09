import React from "react";
import styled from "styled-components";
import brochureicon from '../assets/images/brochure-icon.png';

const BrochureContainer = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent; 
  z-index: 1000; 
`;

const BrochureLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  height: 57.5px;
  background-color: #face1b; 
  margin-left: -120px;
  transition: margin-left 0.3s ease;
  cursor: pointer; /* Ensures cursor changes to pointer */
  color: #000;
  padding-left:10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &:hover {
    margin-left: 0px;
  }
`;
const StyledImage = styled.img`
  width: 80px; 
 height:auto;
 padding-left:15px;

`;

export const BrochureIcon = () => {
  return (
    <BrochureContainer className="text-white">
    <BrochureLink href="https://brochure.brandies.fr"  target="_blank" className="font-Trojan">
      Brochure 
      <StyledImage src={brochureicon} alt="Brochure Icon" />
    </BrochureLink>
  </BrochureContainer>
  );
};

export default BrochureIcon;

