import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
  background: transparent;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 3);
  color: black;
`;

export const HambuergerMenu = styled.div`
  position: absolute;
  padding: 10rem calc((100vw - 1000px) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffff;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const NavLink = styled(Link)`
  display: flex;
  color: #000000;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  &.active {
    color: #000000;
    
  }
`;

export const NavLinkMenu = styled(Link)`
  text-decoration: none;
  color: #000000;
  padding: 2rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 40px;
  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

