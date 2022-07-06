import { PageTitle } from "../../PageTitle";
import { Container } from "../Container";
import { useEffect, useState } from "react";
import { apiData } from "../../api";
import { Loading } from "../Loading";
import { MainBanner } from "./MainBanner";
import { ContentNum } from "../../constant/constant";

export const Home = () => {
  const [mvplay, setMvPlay] = useState();
  const [tvplay, setTvPlay] = useState();
  const [tvpo, setTvpo] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const BannerData = async () => {
      try {
        const {
          data: { results: playingmovie },
        } = await apiData.movie_Playing();
        setMvPlay(playingmovie);

        const {
          data: { results: playtv },
        } = await apiData.tv_OnTheAir();
        setTvPlay(playtv);

        const {
          data: { results: tvpopu },
        } = await apiData.tv_Popular();
        setTvpo(tvpopu);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    BannerData();
  }, []);
  console.log(tvpo);
  return (
    <>
      <PageTitle title="Home" />
      {loading ? (
        <Loading />
      ) : (
        <MainBanner
          mvdt={mvplay[ContentNum]}
          tvpl={tvplay[ContentNum]}
          tvp={tvpo[ContentNum]}
        />
      )}
    </>
  );
};
