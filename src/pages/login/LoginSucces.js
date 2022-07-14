import styled from "styled-components";
import { Link } from "react-router-dom";
import { mainStyle } from "../../styles/Globalstyle";

const LoginWrap = styled.div`
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${mainStyle.color};
  padding-bottom: 30px;
  padding-top: 100px;
`;
const Text = styled.div`
  font-size: 50px;
  font-weight: 700;
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
`;
const Back = styled.div`
  font-size: 20px;
  font-weight: 100;
  font-style: italic;
  color: ${mainStyle.btncolor};
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
