import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/Globalstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${mainStyle.padding};
  position: fixed;
  z-index: 99;
  transition: 0.5s;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mopadding};
  }
`;
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${mainStyle.color};
`;
const MenuWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Menu = styled.div`
  margin-left: 30px;
  color: ${mainStyle.btncolor};
`;
const User = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  margin-left: 30px;
  cursor: pointer;
`;

export const Header = () => {
  const [hcl, setHcl] = useState("rgba(1,1,1,0.2)");
  const scroll = () => {
    const scl = window.pageYOffset;
    const wid = window.innerWidth;
    if (wid > 1000) {
      if (scl > 400) {
        setHcl("#0A1931");
      } else {
        setHcl("rgba(1,1,1,0.2)");
      }
    } else {
      if (scl > 200) {
        setHcl("#0A1931");
      } else {
        setHcl("rgba(1,1,1,0.2)");
      }
    }
  };
  window.addEventListener("scroll", scroll);
  return (
    <SHeader color={hcl}>
      <LogoWrap>
        <Link to="/">
          <Logo>JH+</Logo>
        </Link>
        <Link to="/movie">
          <Menu>Movie</Menu>
        </Link>
        <Link to="/tv">
          <Menu>TV</Menu>
        </Link>
      </LogoWrap>
      <MenuWrap>
        <Link to="/mypage">
          <Menu>My Page</Menu>
        </Link>
        <Link to="/search">
          <Menu>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Menu>
        </Link>
        <User />
      </MenuWrap>
    </SHeader>
  );
};
