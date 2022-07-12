import { PageTitle } from "../../PageTitle";
import { useEffect, useState } from "react";
import { Loading } from "../Loading";
import styled from "styled-components";
import { apiData } from "../../api";
import { ConBox } from "./ConBox";
import { Container } from "../Container";
import { mainStyle } from "../../styles/Globalstyle";
import AOS from "aos";
import { Link } from "react-router-dom";
import { PageScroll } from "../PageScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const UpBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${mainStyle.color};
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 9;
`;

const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  padding-top: 130px;
  padding-bottom: 10px;
  position: fixed;
  top: 0px;
  left: 80px;
  z-index: 9;
  background-color: ${mainStyle.backcolor};
  transition: 0.5s;
  @media screen and (max-width: 500px) {
    padding-top: 100px;
    left: 20px;
    display: block;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  display: ${(props) => props.dis};
  color: ${mainStyle.color};
  transition: 0.5s;
  margin-right: 50px;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    padding-bottom: 20px;
  }
`;
const TitleMenu = styled.div`
  display: flex;
  align-items: end;
  font-size: 20px;
  font-weight: 200;
  transition: 0.5s;
  & a {
    margin: 0 10px;
  }
  & a:first-child {
    margin-left: 0;
  }
  & a:nth-child(3) {
    font-weight: 700;
  }
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
const MvMenu = styled.div`
  color: ${mainStyle.btncolor};
`;
const ConWrap = styled.div`
  padding-top: 200px;
`;
const Con = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 30px;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    column-gap: 20px;
  }
`;

export const MvPopular = () => {
  const [mvpopu, setMvPopu] = useState();
  const [logo, setLogo] = useState("block");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const MovieData = async () => {
      try {
        const {
          data: { results: popumovie },
        } = await apiData.movie_Popular();
        setMvPopu(popumovie);

        AOS.init();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    MovieData();
  }, []);
  const sclmenu = () => {
    const scl = window.pageYOffset;
    if (scl > 200) {
      setLogo("none");
    } else {
      setLogo("block");
    }
  };
  window.addEventListener("scroll", sclmenu);
  const upbtnclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <PageTitle title="Movie" />
      {loading ? (
        <Loading />
      ) : (
        <>
          <PageScroll />
          <Container>
            <UpBtn onClick={upbtnclick}>
              <FontAwesomeIcon icon={faArrowUp} />
            </UpBtn>
            <TitleWrap>
              <Link to={`/movie`}>
                <Title dis={logo}>MOVIE</Title>
              </Link>
              <TitleMenu>
                <Link to={`/movie`}>
                  <MvMenu>ALL</MvMenu>
                </Link>
                |
                <Link to={`/mvplay`}>
                  <MvMenu>상영</MvMenu>
                </Link>
                |
                <Link to={`/mvpopu`}>
                  <MvMenu>인기</MvMenu>
                </Link>
                |
                <Link to={`/mvrate`}>
                  <MvMenu>명작</MvMenu>
                </Link>
                |
                <Link to={`/mvcome`}>
                  <MvMenu>개봉예정</MvMenu>
                </Link>
              </TitleMenu>
            </TitleWrap>
            <ConWrap>
              <Con data-aos="fade-up" data-aos-duration="1500">
                <ConBox Con={mvpopu} />
              </Con>
            </ConWrap>
          </Container>
        </>
      )}
    </>
  );
};
