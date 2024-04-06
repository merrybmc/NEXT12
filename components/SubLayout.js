import React from 'react';
import * as S from './SubLayout.styled';

export default function SubLayout({ children }) {
  return (
    <div>
      <div>{children}</div>
      <S.Footer>cho byeong min</S.Footer>
    </div>
  );
}
