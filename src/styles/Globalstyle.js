import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  padding: "0 80px",
  mopadding: "0 20px",
  color: "#FFC947",
  btncolor: "#EFEFEF",
  livecolor: "red",
  backcolor: "#0A1931",
};

export const Globalstyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #0A1931;
        color: #EFEFEF;
        word-break: keep-all;
    }
    a{
        text-decoration: none;
        color: #FFC947;
    }
`;
