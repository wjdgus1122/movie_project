import styled from "styled-components";
import { PageTitle } from "../../PageTitle";
import { mainStyle } from "../../styles/Globalstyle";

const SignUpWrap = styled.div``;
const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  color: ${mainStyle.color};
  padding-bottom: 30px;
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
const FormWrap = styled.form`
  width: 600px;
  input {
    all: unset;
    width: 100%;
    height: 80px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.65);
    opacity: 0.5;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 5px 10px;
    box-sizing: border-box;
    position: relative;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
    input {
      height: 50px;
      font-size: 15px;
    }
  }
`;
const Input = styled.input``;
const Button = styled.button`
  all: unset;
  width: 100%;
  height: 80px;
  background-color: #185adb;
  color: ${mainStyle.btncolor};
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  border-radius: 10px;
  opacity: ${(props) => props.opa};
  cursor: ${(props) => props.cur};
  @media screen and (max-width: 500px) {
    height: 50px;
    font-size: 20px;
  }
`;

export const SignUp = () => {
  return (
    <>
      <PageTitle title="SignUp" />
      <SignUpWrap>
        <Title>JH+</Title>
        <FormWrap>
          <Input />
          <Input></Input>
          <Input></Input>
          <Button opa={isValid ? 1 : 0.5} cur={isValid ? "pointer" : "auto"}>
            Sign Up
          </Button>
        </FormWrap>
      </SignUpWrap>
    </>
  );
};
