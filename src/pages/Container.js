import styled from "styled-components";
import { mainStyle } from "../styles/Globalstyle";

const SContainer = styled.section`
  padding: ${mainStyle.padding};
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.mopadding};
  }
`;

export const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};
