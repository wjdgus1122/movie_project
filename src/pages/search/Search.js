import { useEffect } from "react";
import styled from "styled-components";
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
  return (
    <>
      <SearchWrap>
        <SearchInput type="text" placeholder="검색어를 입력하세요." />
      </SearchWrap>
    </>
  );
};
