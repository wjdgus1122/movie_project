import { imgUrl } from "../../constant/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper";
import { Autoplay } from "swiper";
import styled from "styled-components";
import { mainStyle } from "../../styles/Globalstyle";

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
  transition: 1s;
  cursor: pointer;
  &::after {
    width: 0%;
    height: 50px;
    background-color: lightgray;
  }
  &:hover::after {
    width: 100%;
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
              <Btn>바로가기</Btn>
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
