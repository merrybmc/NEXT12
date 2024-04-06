import styled from 'styled-components';

export const Layout = styled.div``;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`;

export const Main = styled.main`
  max-width: 700px;
  margin: 0 auto;
  padding: 80px 10px;

  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  border-top: 1px solid rgb(230, 230, 230);
  padding-top: 20px;
  margin-top: 20px;
  text-align: center;
  color: gray;
  font-size: 14px;
`;
