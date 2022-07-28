import { imgUrl, MainbannerImgUrl } from "../../constant/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import { Autoplay } from "swiper";
import styled from "styled-components";
import { mainStyle } from "../../styles/Globalstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SMainBanner = styled.section`
  width: 100%;
  height: 90vh;
  padding: ${mainStyle.padding};
  position: relative;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mopadding};
    height: 100vh;
  }
`;
const TextWrap = styled.div`
  position: absolute;
  left: 80px;
  bottom: 300px;
  z-index: 9;
  @media screen and (max-width: 500px) {
    left: 20px;
    bottom: 50px;
  }
`;
const Title = styled.div`
  width: 700px;
  font-size: 80px;
  font-weight: 700;
  line-height: 100px;
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 50px;
    line-height: 70px;
  }
`;

const Btn = styled.div`
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${mainStyle.btncolor};
  color: ${mainStyle.btncolor};
  border-radius: 6px;
  margin-top: 30px;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s;
  &.onair {
    justify-content: space-around;
    color: ${mainStyle.livecolor};
    border: 1px solid ${mainStyle.livecolor};
    .live {
      font-size: 10px;
    }
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgb(158, 6, 6);
      border-radius: 6px;
      position: absolute;
      top: 0;
      left: -100%;
      z-index: -1;
      transition: all 0.4s;
    }
    &:hover {
      border: 1px solid rgb(158, 6, 6);
      color: ${mainStyle.btncolor};
      font-weight: 600;
    }
  }
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgb(215, 215, 215);
    border-radius: 6px;
    position: absolute;
    top: 0;
    left: -100%;
    z-index: -1;
    transition: all 0.4s;
  }
  &:hover::before {
    transform: translateX(100%);
  }
  &:hover {
    color: #333;
    font-weight: 600;
  }
  @media screen and (max-width: 500px) {
    background-color: ${mainStyle.btncolor};
    color: #333;
    &.onair {
      background-color: red;
      color: ${mainStyle.btncolor};
    }
  }
`;
const Box = styled.div`
  width: 100%;
  height: 80%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const MainBanner = ({ mvdt, tvpl, tvp }) => {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <SMainBanner
            style={{
              background: `url(${MainbannerImgUrl}${mvdt.backdrop_path}) no-repeat center/cover`,
            }}
          >
            <TextWrap>
              <Title>{mvdt.title}</Title>
              <Link to={`/detail1/${mvdt.id}`}>
                <Btn>바로가기</Btn>
              </Link>
            </TextWrap>
            <Box />
          </SMainBanner>
        </SwiperSlide>
        <SwiperSlide>
          <SMainBanner
            style={{
              background: `url(${MainbannerImgUrl}${tvpl.backdrop_path}) no-repeat center/cover`,
            }}
          >
            <TextWrap>
              <Title>{tvpl.name}</Title>
              <Link to={`/detail2/${tvpl.id}`}>
                <Btn className="onair">
                  On Air <FontAwesomeIcon icon={faCircle} className="live" />
                </Btn>
              </Link>
            </TextWrap>
            <Box />
          </SMainBanner>
        </SwiperSlide>
        <SwiperSlide>
          <SMainBanner
            style={{
              background: `url(${MainbannerImgUrl}${tvp.backdrop_path}) no-repeat center/cover`,
            }}
          >
            <TextWrap>
              <Title>{tvp.name}</Title>
              <Link to={`/detail2/${tvp.id}`}>
                <Btn>바로가기</Btn>
              </Link>
            </TextWrap>
            <Box />
          </SMainBanner>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
