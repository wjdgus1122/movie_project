import { SpinnerCircular } from "spinners-react";
import styled from "styled-components";
import { mainStyle } from "../styles/Globalstyle";

const SLoading = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <SLoading>
      <SpinnerCircular size={90} color={mainStyle.color} />
    </SLoading>
  );
};
