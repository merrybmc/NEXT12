import { fetchCountry } from '@/api';
import { useRouter } from 'next/router';
import React from 'react';

export default function Country({ country }) {
  // 동적 라우팅된 쿼리 id값 추출
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // 존재하지 않는 국가 예외처리
  if (!country) {
    return <div>존재하지 않는 국가입니다.</div>;
  }

  return (
    <div>
      {country.commonName} {country.officalName}
    </div>
  );
}

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
  };
};
