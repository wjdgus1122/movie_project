import { PageTitle } from "../../PageTitle";
import { useEffect, useState } from "react";
import { Loading } from "../Loading";
import styled from "styled-components";
import { apiData } from "../../api";
import { ConBox } from "./ConBox";
import { Container } from "../Container";
import { mainStyle } from "../../styles/Globalstyle";
import AOS from "aos";

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

export const Movie = () => {
  const [mvplay, setMvPlay] = useState();
  const [mvpopu, setMvPopu] = useState();
  const [mvrate, setMvRate] = useState();
  const [mvcome, setMvCome] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const MovieData = async () => {
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
        AOS.init();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    MovieData();
  }, []);
  return (
    <>
      <PageTitle title="Movie" />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Title>MOVIE</Title>
          <ConWrap>
            <Con data-aos="fade-up" data-aos-duration="1500">
              <ConBox Con={mvplay} />
            </Con>
            <Con data-aos="fade-up" data-aos-duration="1500">
              <ConBox Con={mvpopu} />
            </Con>
            <Con data-aos="fade-up" data-aos-duration="1500">
              <ConBox Con={mvrate} />
            </Con>
            <Con data-aos="fade-up" data-aos-duration="1500">
              <ConBox Con={mvcome} />
            </Con>
          </ConWrap>
        </Container>
      )}
    </>
  );
};
