import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiData } from "../../api";
import { PageTitle } from "../../PageTitle";
import { Loading } from "../Loading";
import { imgUrl, MainbannerImgUrl } from "../../constant/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faPlay,
  faAngleDown,
  faAngleUp,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { mainStyle } from "../../styles/Globalstyle";
import { PageScroll } from "../PageScroll";
import { Container } from "../Container";

const UpBtn = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
  display: ${(props) => props.dis};
  justify-content: center;
  align-items: center;
  color: ${mainStyle.color};
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 9;
`;

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
  display: flex;
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Runtime = styled.h3``;
const Genres = styled.ul`
  display: flex;
  margin: 0 20px;
`;
const Episode = styled.h3``;
const Text = styled.div`
  width: 70%;
  font-size: 18px;
  font-weight: 100;
  line-height: 23px;
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
  width: 180px;
  height: 50px;
  background-color: ${mainStyle.btncolor};
  border-radius: 6px;
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
  height: 50px;
  border-radius: 6px;
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
  font-size: 24px;
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
  border-bottom: 1px solid #999;
`;
const EpConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 30px;
  padding: 30px 0;
  @media screen and (max-width: 500px) {
    display: block;
    padding: 0;
  }
`;
const EpCon = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    margin: 25px 0 0 0;
  }
`;

const EpImg = styled.div`
  height: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
    height: 100px;
  }
`;
const EpTextWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 10px;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const EpTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 30px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 20px;
  }
`;
const EpTime = styled.div`
  font-size: 15px;
  @media screen and (max-width: 500px) {
    font-size: 13px;
    margin-top: 10px;
  }
`;

const MoEpText = styled.div`
  display: none;
  font-size: 13px;
  line-height: 20px;
  margin-top: 5px;
  @media screen and (max-width: 500px) {
    display: block;
    &:last-child {
      margin-bottom: 20px;
    }
  }
`;

export const Detail2 = () => {
  const [de, setDe] = useState();
  const [vd, setVd] = useState();
  const [loading, setLoading] = useState(true);
  const [vddis, setVdDis] = useState("none");
  const [epdis, setEpdis] = useState("block");
  const [ep, setEp] = useState();
  const [upbtn, setUpBtn] = useState("none");
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

  const upbtnclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const upbtnhandle = () => {
    const scl = window.pageYOffset;
    if (scl > 500) {
      setUpBtn("flex");
    } else {
      setUpBtn("none");
    }
  };
  window.addEventListener("scroll", upbtnhandle);
  return (
    <>
      {de && <PageTitle title={`${de.name}`} />}
      <PageScroll />
      {loading ? (
        <Loading />
      ) : (
        <>
          {de && (
            <>
              <UpBtn onClick={upbtnclick} dis={upbtn}>
                <FontAwesomeIcon icon={faArrowUp} />
              </UpBtn>
              <DetailSection
                style={{
                  background: `url(${
                    de.backdrop_path
                      ? `${MainbannerImgUrl}${de.backdrop_path}`
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
                      <EpConWrap>
                        {ep.map((epi) => (
                          <>
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
                              </EpTextWrap>
                            </EpCon>
                            <MoEpText>{epi.overview}</MoEpText>
                          </>
                        ))}
                      </EpConWrap>
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
