import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiData } from "../../api";
import { PageTitle } from "../../PageTitle";
import { Loading } from "../Loading";
import { imgUrl } from "../../constant/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { mainStyle } from "../../styles/Globalstyle";

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
const Btn = styled.div`
  width: 150px;
  height: 80px;
  background-color: ${mainStyle.btncolor};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 50px;
  }
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
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 13px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: -100%;
    transition: all 0.5s;
  }
  &:hover::before {
    transform: translateX(100%);
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;
const MoText = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 100;
  line-height: 25px;
  padding: ${mainStyle.mopadding};
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

export const Detail2 = () => {
  const [de, setDe] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const moviedata = async () => {
      try {
        const { data } = await apiData.tv_Detail(id);
        setDe(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    moviedata();
  }, []);
  return (
    <>
      <PageTitle title="Detail" />
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
                  <Btn>
                    <BtnText>
                      재생 <FontAwesomeIcon icon={faPlay} />
                    </BtnText>
                  </Btn>
                </TextWrap>
              </DetailSection>
              <MoText>{de.overview}</MoText>
            </>
          )}
        </>
      )}
    </>
  );
};
