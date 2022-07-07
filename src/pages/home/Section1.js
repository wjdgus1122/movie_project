import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../constant/constant";
import "swiper/css";
import "swiper/css/navigation";
import { Container } from "../Container";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 35px;
  font-weight: 500;
  margin-top: 70px;
  margin-bottom: 20px;
`;

const ConImg = styled.div`
  height: 250px;
`;

const ConTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
  margin-top: 10px;
`;

export const Section1 = ({ con, contitle }) => {
  const params = {
    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 1.5,
      },
      640: {
        spaceBetween: 30,
        slidesPerView: 5.2,
      },
    },
  };
  return (
    <>
      <Container>
        <Title>{contitle}</Title>
        <Swiper modules={[Navigation]} navigation {...params}>
          {con.map((con) => (
            <SwiperSlide key={con.id}>
              <Link to={`/detail1/${con.id}`}>
                <ConImg
                  style={{
                    background: `url(${
                      con.backdrop_path
                        ? `${imgUrl}${con.backdrop_path}`
                        : `https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg`
                    }) no-repeat center/cover`,
                  }}
                ></ConImg>
              </Link>
              <ConTitle>{con.title}</ConTitle>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};
