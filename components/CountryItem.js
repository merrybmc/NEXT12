import { useRouter } from 'next/router';
import * as S from './CountryItem.styled';

export default function CountryItem({
  code,
  commonName,
  flagEmoji,
  flagImg,
  population,
  region,
  capital,
}) {
  const router = useRouter();

  const onClickItem = () => {
    router.push(`/country/${code}`);
  };

  return (
    <S.Container onClick={onClickItem}>
      <S.FlagImg src={flagImg} />
      <S.Content>
        <S.Name>
          {flagEmoji} {commonName}
        </S.Name>
        <S.Name>지역 : {region}</S.Name>
        <S.Name>수도 : {capital.join(', ')}</S.Name>
        <S.Name>인구 : {population}</S.Name>
      </S.Content>
    </S.Container>
  );
}
