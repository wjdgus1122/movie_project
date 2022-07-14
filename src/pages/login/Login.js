import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageTitle } from "../../PageTitle";
import { mainStyle } from "../../styles/Globalstyle";

const LoginDb = {
  dbUser: "test",
  dbPw: "123123123a",
};

const LoginWrap = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;
const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  color: ${mainStyle.color};
  padding-bottom: 30px;
`;
const FormWrap = styled.form`
  width: 600px;
  input {
    all: unset;
    width: 100%;
    height: 80px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0.5;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 5px 10px;
    box-sizing: border-box;
    position: relative;
  }
`;
const ErrorMessage = styled.div`
  font-size: 17px;
  color: ${mainStyle.color};
`;
const PasswordWrap = styled.span`
  display: flex;
  position: relative;
`;
const PwView = styled.span`
  display: ${(props) => props.vwdis};
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  top: 30px;
  right: 10px;
  cursor: pointer;
`;
const PwNotView = styled.span`
  display: ${(props) => props.vwnotdis};
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  top: 30px;
  right: 10px;
  cursor: pointer;
`;
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
`;

export const Login = () => {
  const [pwvw, setPwvw] = useState("block");
  const [pwnot, setPwnot] = useState("none");
  const [pwtype, setPwType] = useState("password");
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

  const onSubmit = () => {
    const { username, password } = getValues();
    const { dbUser, dbPw } = LoginDb;

    if (username != dbUser) {
      setError("userResult", { message: "아이디가 틀렸습니다." });
    }
    if (password != dbPw) {
      setError("pwResult", { message: "비밀번호가 틀렸습니다." });
    }
    if (username === dbUser && password === dbPw) {
      alert("로그인 되었습니다.");
    }
  };
  const pwhandle = () => {
    if (pwtype === "password") {
      setPwType("text");
      setPwvw("none");
      setPwnot("block");
    } else {
      setPwType("password");
      setPwvw("block");
      setPwnot("none");
    }
  };
  return (
    <>
      <PageTitle title="LogIn" />
      <LoginWrap>
        <Title>JH+</Title>
        <FormWrap onSubmit={handleSubmit(onSubmit)} method="POST">
          <input
            {...register("username", {
              required: "아이디는 반드시 입력해야합니다.",
              minLength: {
                value: 5,
                message: "아이디는 5자 이상이어야 합니다.",
              },
              onChange() {
                clearErrors("userResult");
              },
            })}
            type="text"
            placeholder="아이디"
          />
          {errors?.username?.message && (
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
          )}
          {errors?.userResult?.message && (
            <ErrorMessage>{errors?.userResult?.message}</ErrorMessage>
          )}
          <PasswordWrap>
            <input
              {...register("password", {
                required: "비밀번호는 반드시 입력해야합니다.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자이상 입력해주세요.",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[0-9a-zA-Z]{8,16}$/,
                  message:
                    "비밀번호는 8자이상 16자미만의 문자와 숫자로 이루어져야 합니다.",
                },
                onChange() {
                  clearErrors("pwResult");
                },
              })}
              type={pwtype}
              placeholder="패스워드를 입력해주세요."
            />

            <PwView onClick={pwhandle} vwdis={pwvw}>
              암호보기
            </PwView>
            <PwNotView onClick={pwhandle} vwnotdis={pwnot}>
              암호숨기기
            </PwNotView>
          </PasswordWrap>
          {errors?.password?.message && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}
          {errors?.pwResult?.message && (
            <ErrorMessage>{errors?.pwResult?.message}</ErrorMessage>
          )}
          <Link to={"/loginsucces"}>
            <Button opa={isValid ? 1 : 0.5} cur={isValid ? "pointer" : "auto"}>
              Login
            </Button>
          </Link>
        </FormWrap>
      </LoginWrap>
    </>
  );
};
