import { imgUrl } from "../../constant/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper";
import { Autoplay } from "swiper";
import styled from "styled-components";
import { mainStyle } from "../../styles/Globalstyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const SMainBanner = styled.section`
  width: 100%;
  height: 90vh;
  padding: ${mainStyle.padding};
  position: relative;
`;
const TextWrap = styled.div`
  position: absolute;
  left: 80px;
  bottom: 50px;
  z-index: 9;
`;
const Title = styled.div`
  width: 700px;
  font-size: 80px;
  font-weight: 700;
  line-height: 100px;
`;

const Btn = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
  border-radius: 15px;
  margin-top: 30px;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s;
  &.onair {
    justify-content: space-around;
    color: red;
    border: 1px solid red;
    .live {
      font-size: 10px;
    }
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: rgb(158, 6, 6);
      border-radius: 13px;
      position: absolute;
      top: 0;
      left: -100%;
      z-index: -1;
      transition: all 0.4s;
    }
    &:hover {
      border: 1px solid rgb(158, 6, 6);
    }
  }
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgb(215, 215, 215);
    border-radius: 13px;
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
    &.onair {
      color: #efefef;
    }
  }
`;
const Box = styled.div`
  width: 100%;
  height: 60%;
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
        autoplay={{ delay: 2000, disableOnInteraction: true }}
      >
        <SwiperSlide>
          <SMainBanner
            style={{
              background: `url(${imgUrl}${mvdt.backdrop_path}) no-repeat center/cover`,
            }}
          >
            <TextWrap>
              <Title>{mvdt.title}</Title>
              <Btn>바로가기</Btn>
            </TextWrap>
            <Box />
          </SMainBanner>
        </SwiperSlide>
        <SwiperSlide>
          <SMainBanner
            style={{
              background: `url(${imgUrl}${tvpl.backdrop_path}) no-repeat center/cover`,
            }}
          >
            <TextWrap>
              <Title>{tvpl.name}</Title>
              <Btn className="onair">
                On Air <FontAwesomeIcon icon={faCircle} className="live" />
              </Btn>
            </TextWrap>
            <Box />
          </SMainBanner>
        </SwiperSlide>
        <SwiperSlide>
          <SMainBanner
            style={{
              background: `url(${imgUrl}${tvp.backdrop_path}) no-repeat center/cover`,
            }}
          >
            <TextWrap>
              <Title>{tvp.name}</Title>
              <Btn>바로가기</Btn>
            </TextWrap>
            <Box />
          </SMainBanner>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
