import { fetchCountry } from '@/api';
import { useRouter } from 'next/router';
import React from 'react';
import * as S from './[id].styled';
import SubLayout from '@/components/SubLayout';
import Head from 'next/head';

export default function Country({ country }) {
  // 동적 라우팅된 쿼리 id값 추출
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return (
      <div>
        <Head>
          <title>LARAS 🌍 </title>
        </Head>
        Loading...
      </div>
    );
  }

  // 존재하지 않는 국가 예외처리
  if (!country) {
    return (
      <div>
        <Head>
          <title>LARAS 🌍 </title>
        </Head>
        존재하지 않는 국가입니다.
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{country.commonName} 국가 정보 조회 LARAS 🌍 </title>
      </Head>

      <S.Container>
        <S.Header>
          <S.CommonName>
            {country.flagEmoji}&nbsp;{country.commonName}
          </S.CommonName>
          <S.CommonName>{country.officialName}</S.CommonName>
        </S.Header>

        <S.FlagImg src={country.flagImg} width={100} height={100} />

        <S.Body>
          <div>
            <b>코드 :</b>&nbsp;{country.code}
          </div>
          <div>
            <b>수도 :</b>&nbsp;{country.capital.join(', ')}
          </div>
          <div>
            <b>지역 :</b>&nbsp;{country.region}
          </div>
          <div>
            <b>지도 :</b>&nbsp;
            <a target='_blank' href={country.googleMapURL}>
              {country.googleMapURL}
            </a>
          </div>
        </S.Body>
      </S.Container>
    </>
  );
}

// Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'KOR' } }, { params: { id: 'ABW' } }],
    // props가 없는 버전의 페이지를 생성 후 우선 빠르게 반환
    // 이후 서버에서 props의 데이터를 적용한 페이지를 생성 후 반환
    fallback: true,

    // 존재하지 않는 경로에 대한 요청이 들어오면
    // 마치 SSR처럼 서버측에서 해당 페이지를 실시간으로 생성
    // 페이지를 생성하는동안 브라우저에서 로딩이 발생
    // fallback: 'blocking',

    // 존재하지 않는 경로에 대한 요청이 들어오면 404페이지 반환
    // fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;

  let country;

  if (id) {
    country = await fetchCountry(id);
  }

  return {
    props: { country },
    revalidate: 5,
  };
};
