import React, { useState } from "react";
import {
  Container,
  MenuLink,
  UnorderedList,
  NavBar,
  MenuIcon,
  Logo,
  NavElements,
  NavLink,
  IconMoon,
  IconLightMode,
} from "./NavBar.style.js";
import { RxTextAlignLeft, RxTextAlignRight } from "react-icons/rx";

function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [mode, setMode] = useState("light");
  const [menu, setMenu] = useState("menu");
  const closeNavItems = () => {
    setShowNav(!showNav);
  };
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenu(menu === "close" ? "open" : "close");
  };

  return (
    <NavBar>
      <Container>
        <Logo>IA</Logo>
        <MenuIcon onClick={closeNavItems}>
          {menu === "close" ? (
            <RxTextAlignLeft size={38} onClick={toggleMenu} />
          ) : (
            <RxTextAlignRight size={38} onClick={toggleMenu} />
          )}
        </MenuIcon>
        <NavElements
          display={showNav.toString()}
          className={`${showNav && "active"}`}
        >
          <UnorderedList>
            <MenuLink>
              <NavLink
                to="/"
                aria-current="page"
                className="active"
                onClick={closeNavItems}
              >
                Home
              </NavLink>
            </MenuLink>

            <MenuLink>
              <NavLink
                to="/"
                aria-current="page"
                className="active"
                onClick={closeNavItems}
              >
                About
              </NavLink>
            </MenuLink>
            <MenuLink>
              <NavLink
                to="/"
                aria-current="page"
                className="active"
                onClick={closeNavItems}
              >
                Projects
              </NavLink>
            </MenuLink>
            <MenuLink>
              <NavLink
                aria-current="page"
                onClick={closeNavItems}
                className="active"
              >
                Content
              </NavLink>
            </MenuLink>
            <MenuLink>
              {mode === "light" ? (
                <IconMoon size={26} onClick={toggleMode} />
              ) : (
                <IconLightMode size={26} onClick={toggleMode} />
              )}
            </MenuLink>
          </UnorderedList>
        </NavElements>
      </Container>
    </NavBar>
  );
}

export default Navbar;
