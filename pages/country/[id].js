import { useRouter } from 'next/router';
import React from 'react';

export default function Country() {
  // 동적 라우팅된 쿼리 id값 추출
  const router = useRouter();
  const { id } = router.query;
  // const id = router.query.id;

  return <div>Country {id}</div>;
}
