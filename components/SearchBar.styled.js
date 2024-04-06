import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;

  input {
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: rgb(230, 230, 230);
    padding: 15px;
  }

  button {
    width: 80px;
    border: none;
    border-radius: 10px;
    background-color: white;
    padding: 15px;
    font-weight: bold;
    cursor: pointer;
  }
`;
