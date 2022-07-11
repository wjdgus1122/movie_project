import { imgUrl } from "../../constant/constant";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ConTant = styled.div``;
const ConImg = styled.div`
  height: 400px;
`;
const ConTitle = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
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
                      ? `${imgUrl}${con.backdrop_path}`
                      : `https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg`
                  }) no-repeat center/cover`,
                }}
              />
              <ConTitle>{con.title}</ConTitle>
            </ConTant>
          </Link>
        </>
      ))}
    </>
  );
};
