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
import { RxTextAlignLeft } from "react-icons/rx";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [mode, setMode] = useState("light");
  const closeNavItems = () => {
    setShowNav(!showNav);
  };
  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <NavBar>
      <Container>
        <Logo>IA</Logo>
        <MenuIcon onClick={closeNavItems}>
          <RxTextAlignLeft size={38} />
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
