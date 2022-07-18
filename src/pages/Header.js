import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/Globalstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { LoginHeader } from "../constant/constant";

const SHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.color};
  display: ${(props) => props.dis};
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
  font-size: 18px;
  margin-left: 30px;
  color: ${mainStyle.btncolor};
  @media screen and (max-width: 500px) {
    margin-left: 15px;
  }
`;
const User = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  margin-left: 30px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    margin-left: 15px;
  }
`;
const LogMenuWrap = styled.div`
  width: 100px;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 55px;
  right: 80px;
  z-index: 99;
  display: ${(props) => props.dis};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 500px) {
    right: 20px;
  }
`;
const LogMenu = styled.div`
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  color: ${mainStyle.btncolor};
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpBtn = styled.div`
  width: 100%;
  height: 30px;
  border-top: 1px solid ${mainStyle.btncolor};
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Header = () => {
  const [hcl, setHcl] = useState("rgba(1,1,1,0.2)");
  const [logmenu, setLogMenu] = useState("none");
  const [logheader, setLogheader] = useState("flex");
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
  useEffect(() => {
    const loginhandle = () => {
      if (LoginHeader === true) {
        setLogheader("flex");
      } else {
        setLogheader("none");
      }
    };
    loginhandle();
  }, []);
  return (
    <>
      <SHeader color={hcl} dis={logheader}>
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
          <Link to="/search">
            <Menu>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Menu>
          </Link>

          <User
            onClick={() => {
              setLogMenu("flex");
            }}
          />
        </MenuWrap>
      </SHeader>
      <LogMenuWrap dis={logmenu}>
        <Link to="/login">
          <LogMenu>로그아웃</LogMenu>
        </Link>
        <UpBtn
          onClick={() => {
            setLogMenu("none");
          }}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </UpBtn>
      </LogMenuWrap>
    </>
  );
};
