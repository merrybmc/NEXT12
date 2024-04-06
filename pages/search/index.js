import { fetchSearchResults } from '@/api';
import SubLayout from '@/components/SubLayout';
import React from 'react';

export default function Search({ searchResults }) {
  return (
    <div>
      {searchResults?.map((contry, index) => {
        return <div key={index}>{contry.commonName}</div>;
      })}
    </div>
  );
}

Search.Layout = SubLayout;

export const getServerSideProps = async (context) => {
  // 검색 결과 API 호출
  // props로 리턴
  // context = 브라우저에서 요청받은 정보

  // 주소에 있는 쿼리의 값 추출
  const { q } = context.query;

  let searchResults = [];

  if (q) {
    searchResults = await fetchSearchResults(q);
  }

  return {
    props: { searchResults },
  };
};
