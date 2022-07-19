import { MainbannerImgUrl } from "../../constant/constant";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../../styles/Globalstyle";

const ConTant = styled.div``;
const ConImg = styled.div`
  height: 400px;
  position: relative;
  transition: 0.5s;
  &:hover {
    transform: translateY(-20px);
  }
  &:hover .contitle {
    font-size: 30px;
    font-weight: 700;
    transition: 0.5s;
  }
  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;
const Box = styled.div`
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  position: absolute;
  left: 0;
  bottom: 0;
`;
const ConTitle = styled.div`
  width: 70%;
  margin-top: 10px;
  font-size: 25px;
  font-weight: 500;
  line-height: 30px;
  color: ${mainStyle.btncolor};
  position: absolute;
  left: 10px;
  bottom: 10px;
  transition: 0.5s;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const ConBox = ({ Con }) => {
  return (
    <>
      {Con.map((con) => (
        <>
          <Link to={`/detail1/${con.id}`}>
            <ConTant key={con.id}>
              <ConImg
                style={{
                  background: `url(${
                    con.backdrop_path
                      ? `${MainbannerImgUrl}${con.backdrop_path}`
                      : `https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg`
                  }) no-repeat center/cover`,
                }}
              >
                <Box />
                <ConTitle className="contitle">{con.title}</ConTitle>
              </ConImg>
            </ConTant>
          </Link>
        </>
      ))}
    </>
  );
};
