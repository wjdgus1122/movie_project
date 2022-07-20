import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { apiData } from "../../api";
import { mainStyle } from "../../styles/Globalstyle";
import { Loading } from "../Loading";
import { imgUrl } from "../../constant/constant";
import { Container } from "../Container";
import { Link } from "react-router-dom";

const SearchWrap = styled.form`
  padding: ${mainStyle.padding};
  padding-top: 130px;
  padding-bottom: 50px;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mopadding};
    padding-top: 100px;
    padding-bottom: 30px;
  }
`;
const SearchInput = styled.input`
  all: unset;
  width: 100%;
  height: 80px;
  background-color: ${mainStyle.btncolor};
  color: #333;
  border-radius: 10px;
  opacity: 0.8;
  padding: 10px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    height: 50px;
  }
`;
const ConWrap = styled.div`
  display: grid;
  row-gap: 30px;
  column-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 5px;
    column-gap: 15px;
  }
`;
const Con = styled.div``;
const ConImg = styled.div`
  height: 500px;
  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;
const ConTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 25px;
  color: ${mainStyle.btncolor};
  margin: 10px 0;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 20px;
  }
`;
export const Search = () => {
  const [mvsh, setMvSh] = useState();
  const [tvsh, setTvSh] = useState();
  const [loading, setLoading] = useState();
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
    clearErrors,
  } = useForm({
    mode: "onChange",
  });
  const onsubmit = async () => {
    const { search: term } = getValues();
    setLoading(true);
    try {
      const {
        data: { results: movieresults },
      } = await apiData.mv_search(term);
      const {
        data: { results: tvresults },
      } = await apiData.tv_search(term);
      if (movieresults.length <= 0) {
        if (tvresults.length <= 0) {
          setError("notsearch", {
            message: "검색결과를 찾을수 없습니다.",
          });
        }
      } else {
        setMvSh(movieresults);
        setTvSh(tvresults);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(errors);
  return (
    <>
      <SearchWrap onSubmit={handleSubmit(onsubmit)}>
        <SearchInput
          {...register("search", {
            required: "검색어는 반드시 입력해야합니다.",
            onChange() {
              clearErrors("notsearch");
            },
          })}
          type="text"
          placeholder="검색어를 입력하세요."
        />
        {errors?.search?.message}
        {errors?.notsearch?.message}
      </SearchWrap>
      {loading ? (
        <Loading />
      ) : (
        <>
          {mvsh && (
            <Container>
              <ConWrap>
                {mvsh.map((con) => (
                  <Link to={`/detail1/${con.id}`}>
                    <Con>
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
                    </Con>
                  </Link>
                ))}
              </ConWrap>
            </Container>
          )}
          {tvsh && (
            <Container>
              <ConWrap>
                {tvsh.map((con) => (
                  <Link to={`/detail2/${con.id}`}>
                    <Con>
                      <ConImg
                        style={{
                          background: `url(${
                            con.backdrop_path
                              ? `${imgUrl}${con.backdrop_path}`
                              : `https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg`
                          }) no-repeat center/cover`,
                        }}
                      />
                      <ConTitle>{con.name}</ConTitle>
                    </Con>
                  </Link>
                ))}
              </ConWrap>
            </Container>
          )}
        </>
      )}
    </>
  );
};
