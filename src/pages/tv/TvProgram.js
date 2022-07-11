import { PageTitle } from "../../PageTitle";
import { useEffect, useState } from "react";
import { Loading } from "../Loading";
import styled from "styled-components";
import { apiData } from "../../api";
import { ConBox } from "./ConBox";
import { Container } from "../Container";
import AOS from "aos";
import { mainStyle } from "../../styles/Globalstyle";

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  padding-top: 130px;
  margin-bottom: 50px;
  color: ${mainStyle.color};
  @media screen and (max-width: 500px) {
    font-size: 40px;
    padding-top: 100px;
    margin-bottom: 20px;
  }
`;
const ConWrap = styled.div``;
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

export const TvProgram = () => {
  const [tvplay, setTvPlay] = useState();
  const [tvpo, setTvpo] = useState();
  const [tvair, setTvAir] = useState();
  const [tvrate, setTvRate] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const TvData = async () => {
      try {
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
    TvData();
  }, []);
  return (
    <>
      <PageTitle title="TV" />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Title>TV PROGRAM</Title>
          <ConWrap>
            <Con data-aos="fade-up" data-aos-duration="1500">
              <ConBox Con={tvplay} />
            </Con>
            <Con data-aos="fade-up" data-aos-duration="1500">
              <ConBox Con={tvpo} />
            </Con>
            <Con data-aos="fade-up" data-aos-duration="1500">
              <ConBox Con={tvair} />
            </Con>
            <Con data-aos="fade-up" data-aos-duration="1500">
              <ConBox Con={tvrate} />
            </Con>
          </ConWrap>
        </Container>
      )}
    </>
  );
};
