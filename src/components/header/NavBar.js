import React, { useState, useRef, useEffect } from "react";
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
  const [mode, setMode] = useState("light");
  const [menu, setMenu] = useState(false);
  const menuRef = useRef();

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const toggleMenu = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };
    document.addEventListener("mousedown", toggleMenu);
    return () => {
      document.removeEventListener("mousedown", toggleMenu);
    };
  }, []);

  return (
    <NavBar>
      <Container>
        <Logo>Iliada Arapi</Logo>
        <MenuIcon
          onClick={() => {
            setMenu(!menu);
          }}
        >
          {menu ? (
            <RxTextAlignLeft
              size={38}
              onClick={() => {
                setMenu(!menu);
              }}
            />
          ) : (
            <RxTextAlignRight
              size={38}
              onClick={() => {
                setMenu(!menu);
              }}
            />
          )}
        </MenuIcon>
        <NavElements className={menu ? " " : "hiden"} ref={menuRef}>
          <UnorderedList>
            <MenuLink>
              <NavLink to="/" aria-current="page" className="active">
                Home
              </NavLink>
            </MenuLink>

            <MenuLink>
              <NavLink to="/about" aria-current="page" className="active">
                About
              </NavLink>
            </MenuLink>
            <MenuLink>
              <NavLink to="/projects" aria-current="page" className="active">
                Projects
              </NavLink>
            </MenuLink>
            <MenuLink>
              <NavLink aria-current="page" className="active">
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
