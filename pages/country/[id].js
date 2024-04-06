import { fetchCountry } from '@/api';
import { useRouter } from 'next/router';
import React from 'react';

export default function Country({ country }) {
  // 동적 라우팅된 쿼리 id값 추출
  const router = useRouter();
  const { id } = router.query;
  // const id = router.query.id;

  return (
    <div>
      {country.commonName} {country.officalName}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  let country;

  if (id) {
    country = await fetchCountry(id);
  }

  return {
    props: { country },
  };
};
