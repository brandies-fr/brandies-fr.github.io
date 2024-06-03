import React, { useState } from 'react';
import styled from 'styled-components'; // Import styled-components

function HamburgerMenu() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const colors = {
        primaryDark : "#115b46",
        primaryLight : "#B6EDC8",
    };

    const MenuLabel = styled.label`
        background-color: ${colors.primaryDark};
        position: fixed;
        top: 6rem;
        right: 6rem;
       border-radius : 50%;
       cursor:pointer;
       height : 7rem;
       width : 7rem;
       z-index : 9999;
       box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
       text-align : center;
    `;
    const NavBackground = styled.div `
        position: fixed;
        top: 6.5rem;
        right: 6.5rem;
        background-image : radial-gradient(
            ${colors.primaryDark},
            ${colors.primaryLight}
        );
        height: 6rem;
        width: 6rem;
        border-radius:50%;
        transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
        transition: transform 1s ease;
    `;
    return (
        <>
            
            <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>Menu</MenuLabel>
            <NavBackground clicked = {click}>&nbsp;</NavBackground>
        </>
    );
}

export default HamburgerMenu;
