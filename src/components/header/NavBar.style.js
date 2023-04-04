import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../config/colors";
import breakpoints from "../../config/breakpoints";
import { FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";


export const NavBar = styled.nav`
  background-color: ${colors.white};
  z-index: 1;
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
  top: 33px;
  margin-right: 5%;
  @media (max-width: ${breakpoints.md}) {
    top: 0;
    margin-right: 0;
  }
`;
export const Logo = styled.div`
  color: ${colors.navColor};
  font-size: 26px;
  font-family: "Roboto";
  margin-left: 5%;
`;

export const NavElements = styled.div`
  @media (max-width: ${breakpoints.md}) {
    position: absolute;
    right: 0;
    top: 0;
    background: ${colors.white};
    box-shadow: 0px 0px 18px ${colors.lightSilver};
    height: 100vh;
    transition: all 0.3s ease-in;
    overflow: hidden;
    z-index: 2;
    width: 200px;
    &.active {
      width: 200px;
      display: none;
    }
  }
`;
export const UnorderedList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  margin: 0;
  gap: 1rem;
  align-items: center;
  @media (max-width: ${breakpoints.md}) {
    display: flex;
    flex-direction: column;
    margin-left: 17px;
    margin-top: 50px;
    margin-left: 50px;
    align-items: flex-start;
  }
`;
export const MenuLink = styled.li`
  align-items: center;
  color: ${colors.navColor};
  font-size: 18px;
  font-family: "Roboto";

  &:not(:last-child) {
    margin-right: 50px;
  }

  @media (max-width: ${breakpoints.md}) {
    margin-right: unset;
    margin-top: 22px;
  }
`;
export const NavLink = styled(Link)`
  color: ${colors.navColor};
  font-weight: 500;
  text-decoration: none;
`;

export const MenuIcon = styled.div`
  display: none;
  @media (max-width: ${breakpoints.md}) {
    display: block;
    cursor: pointer;
    color: ${colors.navColor};
    z-index: 4;
    margin-right: 5%;
  }
`;
export const IconMoon = styled(FaMoon)`
  fill: ${colors.navColor};
  transform: rotate(-20deg);
  margin-left: 15px;
  cursor: pointer;
`;

export const IconLightMode = styled(MdOutlineLightMode)`
  fill: ${colors.navColor};
  margin-left: 15px;
  cursor: pointer;
`;
