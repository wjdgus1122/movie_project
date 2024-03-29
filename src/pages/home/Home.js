import { PageTitle } from "../../PageTitle";
import { useEffect, useState } from "react";
import { apiData } from "../../api";
import { Loading } from "../Loading";
import { MainBanner } from "./MainBanner";
import { ContentNum } from "../../constant/constant";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import styled from "styled-components";
import { mainStyle } from "../../styles/Globalstyle";
import AOS from "aos";
import "aos/dist/aos.css";
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
const SectionWrap = styled.section`
  width: 100%;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin-top: 50px;
  padding: ${mainStyle.padding};
  color: ${mainStyle.color};
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mopadding};
  }
`;
const Title2 = styled.div`
  font-size: 50px;
  font-weight: 700;
  text-align: end;
  margin-top: 50px;
  padding: ${mainStyle.padding};
  color: ${mainStyle.color};
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mopadding};
  }
`;

const Section = styled.div`
  &:last-child {
    margin-bottom: 20px;
  }
`;

export const Home = () => {
  const [mvplay, setMvPlay] = useState();
  const [mvpopu, setMvPopu] = useState();
  const [mvrate, setMvRate] = useState();
  const [mvcome, setMvCome] = useState();
  const [tvplay, setTvPlay] = useState();
  const [tvpo, setTvpo] = useState();
  const [tvair, setTvAir] = useState();
  const [tvrate, setTvRate] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const BannerData = async () => {
      try {
        const {
          data: { results: playingmovie },
        } = await apiData.movie_Playing();
        setMvPlay(playingmovie);

        const {
          data: { results: popumovie },
        } = await apiData.movie_Popular();
        setMvPopu(popumovie);

        const {
          data: { results: ratemovie },
        } = await apiData.movie_Rated();
        setMvRate(ratemovie);

        const {
          data: { results: upcomemovie },
        } = await apiData.movie_Upcoming();
        setMvCome(upcomemovie);

        const {
          data: { results: playtv },
        } = await apiData.tv_OnTheAir();
        setTvPlay(playtv);

        const {
          data: { results: tvpopu },
        } = await apiData.tv_Popular();
        setTvpo(tvpopu);

        const {
          data: { results: airtv },
        } = await apiData.tv_AiringToday();
        setTvAir(airtv);

        const {
          data: { results: ratetv },
        } = await apiData.tv_Rated();
        setTvRate(ratetv);
        AOS.init();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    BannerData();
  }, []);
  const upbtnclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <PageTitle title="Home" />

      {loading ? (
        <Loading />
      ) : (
        <>
          <PageScroll />
          <UpBtn onClick={upbtnclick}>
            <FontAwesomeIcon icon={faArrowUp} />
          </UpBtn>
          <MainBanner
            mvdt={mvplay[ContentNum]}
            tvpl={tvplay[ContentNum]}
            tvp={tvpo[ContentNum]}
          />
          <SectionWrap>
            <Title data-aos="fade-up" data-aos-duration="3000">
              MOIVE
            </Title>
            <Section
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Section1 con={mvplay} contitle="상영중인영화" />
            </Section>
            <Section
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Section1 con={mvpopu} contitle="인기영화" />
            </Section>
            <Section
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Section1 con={mvrate} contitle="명작영화" />
            </Section>
            <Section
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Section1 con={mvcome} contitle="상영예정영화" />
            </Section>
            <Title2 data-aos="fade-up" data-aos-duration="3000">
              TV PROGRAM
            </Title2>
            <Section
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Section2 con={tvplay} contitle="지금방송중" />
            </Section>
            <Section
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Section2 con={tvpo} contitle="인기프로그램" />
            </Section>
            <Section
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Section2 con={tvair} contitle="오늘 방송예정 프로그램" />
            </Section>
            <Section
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Section2 con={tvrate} contitle="명작프로그램" />
            </Section>
          </SectionWrap>
        </>
      )}
    </>
  );
};
