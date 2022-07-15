import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiData } from "../../api";
import { PageTitle } from "../../PageTitle";
import { Loading } from "../Loading";
import { imgUrl } from "../../constant/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlay } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { mainStyle } from "../../styles/Globalstyle";
import { PageScroll } from "../PageScroll";
import { Container } from "../Container";

const DetailSection = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${mainStyle.padding};
  position: relative;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mopadding};
  }
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;
const TextWrap = styled.div`
  position: absolute;
  left: 80px;
  bottom: 50px;
  @media screen and (max-width: 500px) {
    left: 20px;
    bottom: 20px;
  }
`;
const Title = styled.div`
  font-size: 80px;
  font-weight: 700;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 500px) {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

const STextWrap = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  font-weight: 500;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Runtime = styled.h3``;
const Genres = styled.ul`
  display: flex;
`;
const Episode = styled.h3``;
const Text = styled.div`
  width: 70%;
  font-size: 25px;
  font-weight: 100;
  line-height: 35px;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const BtnWrap = styled.div`
  display: flex;
`;
const Btn = styled.div`
  width: 150px;
  height: 80px;
  background-color: ${mainStyle.btncolor};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  margin-right: 30px;
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 50px;
    margin-right: 10px;
  }
  &:hover .box {
    transform: translateX(100%);
  }
`;
const BtnBox = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 13px;
  background-color: ${mainStyle.color};
  position: absolute;
  top: 0;
  left: -100%;
  z-index: 1;
  transition: all 0.5s;
`;
const BtnText = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 13px;
  font-size: 30px;
  color: #333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  transition: all 0.5s;
  cursor: pointer;
  z-index: 3;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
const MoText = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 100;
  line-height: 20px;
  padding: ${mainStyle.mopadding};
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const VideoWrap = styled.div``;
const VideoCon = styled.div`
  width: 100%;
  height: 100vh;
  display: ${(props) => props.dis};
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CloseBtn = styled.div`
  font-size: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 90%;
`;
const NonText = styled.h1`
  font-size: 20px;
  font-weight: 500;
  padding: ${mainStyle.padding};
`;

const EpisodeWrap = styled.div`
  display: ${(props) => props.dis};
  padding-top: 50px;
  border-bottom: 1px solid #999;
`;
const EpCon = styled.div`
  display: flex;
  margin: 20px 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 50px;
  }
`;
const EpImg = styled.div`
  width: 300px;
  height: 200px;
`;
const EpTextWrap = styled.div`
  margin-left: 30px;
  margin-top: 20px;
`;
const EpTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const EpTime = styled.div`
  font-size: 15px;
`;
const EpText = styled.div`
  margin-top: 20px;
  width: 500px;
  line-height: 25px;
`;

export const Detail2 = () => {
  const [de, setDe] = useState();
  const [vd, setVd] = useState();
  const [loading, setLoading] = useState(true);
  const [vddis, setVdDis] = useState("none");
  const [epdis, setEpdis] = useState("block");
  const [ep, setEp] = useState();
  const { id } = useParams();
  useEffect(() => {
    const moviedata = async () => {
      try {
        const { data: tvdetail } = await apiData.tv_Detail(id);
        setDe(tvdetail);
        const {
          data: { results },
        } = await apiData.tv_video(id);
        setVd(`${results.length === 0 ? null : results[0].key}`);

        const season = await tvdetail.seasons;
        const {
          data: { episodes },
        } = await apiData.tv_episode_detail(
          tvdetail.id,
          season.map((a) => a.season_number)
        );
        setEp(episodes);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    moviedata();
  }, []);

  const playbtn = () => {
    setEpdis("none");
    setVdDis("flex");
    setTimeout(() => {
      window.scrollTo({
        top: 900,
        behavior: "smooth",
      });
    }, 250);
  };
  const Closehandel = () => {
    setVdDis("none");
    setEpdis("block");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const epbtn = () => {
    setVdDis("none");
    setEpdis("block");
    setTimeout(() => {
      window.scrollTo({
        top: 900,
        behavior: "smooth",
      });
    }, 250);
  };
  return (
    <>
      <PageTitle title="Detail" />
      <PageScroll />
      {loading ? (
        <Loading />
      ) : (
        <>
          {de && (
            <>
              <DetailSection
                style={{
                  background: `url(${
                    de.backdrop_path
                      ? `${imgUrl}${de.backdrop_path}`
                      : `https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645__340.jpg`
                  }) no-repeat center/cover`,
                }}
              >
                <Box />
                <TextWrap>
                  <Title>{de.name}</Title>
                  <STextWrap>
                    <Runtime>{de.episode_run_time[0]}분</Runtime>
                    <Genres>
                      {de.genres && (
                        <>
                          {de.genres.map((ge) => (
                            <li>{ge.name}/</li>
                          ))}
                        </>
                      )}
                    </Genres>
                    <Episode>{de.number_of_episodes}부작</Episode>
                  </STextWrap>
                  <Text>{de.overview}</Text>
                  <BtnWrap>
                    <Btn onClick={playbtn}>
                      <BtnBox className="box" />
                      <BtnText>
                        예고편 <FontAwesomeIcon icon={faPlay} />
                      </BtnText>
                    </Btn>
                    <Btn onClick={epbtn}>
                      <BtnBox className="box" />
                      <BtnText>episode</BtnText>
                    </Btn>
                  </BtnWrap>
                </TextWrap>
              </DetailSection>
              <MoText>{de.overview}</MoText>
              <VideoWrap>
                {vd ? (
                  <VideoCon dis={vddis}>
                    <CloseBtn onClick={Closehandel}>
                      <FontAwesomeIcon icon={faClose} />
                    </CloseBtn>
                    <Iframe src={`https://www.youtube.com/embed/${vd}`} />
                  </VideoCon>
                ) : (
                  <NonText>영상이 없습니다.</NonText>
                )}
              </VideoWrap>
              <EpisodeWrap dis={epdis}>
                <Container>
                  {ep && (
                    <>
                      {ep.map((epi) => (
                        <EpCon>
                          <EpImg
                            style={{
                              background: `url(${
                                epi.still_path
                                  ? `${imgUrl}${epi.still_path}`
                                  : `https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg`
                              }) no-repeat center/cover`,
                            }}
                          />
                          <EpTextWrap>
                            <EpTitle>{epi.name}</EpTitle>
                            <EpTime>{epi.runtime}분</EpTime>
                            <EpText>{epi.overview}</EpText>
                          </EpTextWrap>
                        </EpCon>
                      ))}
                    </>
                  )}
                </Container>
              </EpisodeWrap>
            </>
          )}
        </>
      )}
    </>
  );
};
