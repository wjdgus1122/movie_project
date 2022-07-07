import styled from "styled-components";

const SFooter = styled.footer`
  padding: 50px 200px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 500px) {
    padding: 30px 100px;
  }
`;

export const Footer = () => {
  return <SFooter>&copy; JHKANG</SFooter>;
};
