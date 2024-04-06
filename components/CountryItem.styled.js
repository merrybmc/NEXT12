import styled from 'styled-components';

export const Container = styled.div`
  width: 220px;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

export const FlagImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0px;
`;
