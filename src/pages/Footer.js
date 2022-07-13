import styled from "styled-components";

const SFooter = styled.footer`
  font-size: 20px;
  padding: 50px 200px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 500px) {
    padding: 30px 100px;
    font-size: 13px;
  }
`;

export const Footer = () => {
  return <SFooter>&copy; JHKANG</SFooter>;
};
