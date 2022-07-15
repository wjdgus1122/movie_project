import styled from "styled-components";
import { Link } from "react-router-dom";
import { mainStyle } from "../../styles/Globalstyle";

const LoginWrap = styled.div`
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    height: 90vh;
  }
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${mainStyle.color};
  padding-bottom: 30px;
  padding-top: 100px;
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
const Text = styled.div`
  font-size: 50px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
const Btn = styled.div`
  width: 600px;
  height: 80px;
  background-color: #185adb;
  color: ${mainStyle.btncolor};
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 330px;
    height: 50px;
    font-size: 20px;
  }
`;
const Back = styled.div`
  font-size: 20px;
  font-weight: 100;
  font-style: italic;
  color: ${mainStyle.btncolor};
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

export const LoginSucces = () => {
  return (
    <>
      <LoginWrap>
        <Title>JH+</Title>
        <Text>test님 어서오세요!</Text>
        <Link to={"/"}>
          <Btn>홈으로가기</Btn>
        </Link>
        <Link to={"/login"}>
          <Back>로그아웃</Back>
        </Link>
      </LoginWrap>
    </>
  );
};
