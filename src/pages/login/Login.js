import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PageTitle } from "../../PageTitle";
import { mainStyle } from "../../styles/Globalstyle";

const LoginDb = {
  dbUser: "testid",
  dbPw: "123123123a",
};

const LoginWrap = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  @media screen and (max-width: 500px) {
    height: 90vh;
  }
`;
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
const ErrorMessage = styled.div`
  font-size: 17px;
  color: ${mainStyle.color};
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
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
  @media screen and (max-width: 500px) {
    font-size: 15px;
    top: 17px;
  }
`;
const PwNotView = styled.span`
  display: ${(props) => props.vwnotdis};
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  top: 30px;
  right: 10px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    top: 17px;
  }
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
  @media screen and (max-width: 500px) {
    height: 50px;
    font-size: 20px;
  }
`;

export const Login = () => {
  const [pwvw, setPwvw] = useState("block");
  const [pwnot, setPwnot] = useState("none");
  const [pwtype, setPwType] = useState("password");
  const navigate = useNavigate();
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
      setError("userResult", { message: "???????????? ???????????????." });
    }
    if (password != dbPw) {
      setError("pwResult", { message: "??????????????? ???????????????." });
    }
    if (username === dbUser && password === dbPw) {
      navigate("/loginsucces");
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
              required: "???????????? ????????? ?????????????????????.",
              minLength: {
                value: 5,
                message: "???????????? 5??? ??????????????? ?????????.",
              },
              onChange() {
                clearErrors("userResult");
              },
            })}
            type="text"
            placeholder="?????????"
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
                required: "??????????????? ????????? ?????????????????????.",
                minLength: {
                  value: 8,
                  message: "??????????????? 8????????? ??????????????????.",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[0-9a-zA-Z]{8,16}$/,
                  message:
                    "??????????????? 8????????? 16???????????? ????????? ????????? ??????????????? ?????????.",
                },
                onChange() {
                  clearErrors("pwResult");
                },
              })}
              type={pwtype}
              placeholder="??????????????? ??????????????????."
            />

            <PwView onClick={pwhandle} vwdis={pwvw}>
              ????????????
            </PwView>
            <PwNotView onClick={pwhandle} vwnotdis={pwnot}>
              ???????????????
            </PwNotView>
          </PasswordWrap>
          {errors?.password?.message && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}
          {errors?.pwResult?.message && (
            <ErrorMessage>{errors?.pwResult?.message}</ErrorMessage>
          )}

          <Button opa={isValid ? 1 : 0.5} cur={isValid ? "pointer" : "auto"}>
            Login
          </Button>
        </FormWrap>
      </LoginWrap>
    </>
  );
};
