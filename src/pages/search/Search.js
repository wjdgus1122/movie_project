import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { apiData } from "../../api";
import { mainStyle } from "../../styles/Globalstyle";

const SearchWrap = styled.form`
  height: 87vh;
  padding: ${mainStyle.padding};
  padding-top: 130px;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mopadding};
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
`;

export const Search = () => {
  const [sh, setSh] = useState();
  const [loading, setLoading] = useState();
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isValid },
    clearErrors,
  } = useForm({
    mode: "onChange",
  });
  const onsubmit = async () => {
    const { search: term } = getValues;
    setLoading(true);
    try {
      const {
        data: { results: movieresults },
      } = await apiData.mv_search(term);
      const {
        data: { results: tvresults },
      } = await apiData.tv_search(term);
      if (movieresults.length && tvresults.length <= 0) {
        setError("notsearch", {
          message: "검색결과를 찾을수 없습니다.",
        });
      } else {
        setSh(movieresults, tvresults);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
    </>
  );
};
