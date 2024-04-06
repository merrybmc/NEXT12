import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const Header = styled.div`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgb(230, 230, 230);
`;

export const CommonName = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FlagImg = styled(Image)`
  position: relative;
  width: 320px;
  height: 213px;
`;
