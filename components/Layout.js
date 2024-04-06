import React from 'react';
import * as S from './Layout.styled';
import { useRouter } from 'next/router';
export default function Layout({ children }) {
  const router = useRouter();

  const onClickMoveMain = () => {
    router.push('/');
  };
  return (
    <S.Layout>
      <S.Header onClick={onClickMoveMain}>LARAS 🌍</S.Header>
      <S.Main>{children}</S.Main>
      <S.Footer>cho byeong min</S.Footer>
    </S.Layout>
  );
}
