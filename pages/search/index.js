import { fetchSearchResults } from '@/api';
import CountryList from '@/components/CountryList';
import SearchBar from '@/components/SearchBar';
import SubLayout from '@/components/SubLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// props { searchResults }
export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  // CSR 렌더링 방식 적용
  const [searchResults, setSearchResults] = useState([]);

  const setData = async () => {
    const data = await fetchSearchResults(q);
    setSearchResults(data);
  };

  useEffect(() => {
    if (q) {
      setData();
    }
  }, [q]);

  return (
    <div>
      <Head>
        <title>NARAS 검색</title>
      </Head>
      <SearchBar q={q} />
      <CountryList countries={searchResults} />
    </div>
  );
}

Search.Layout = SubLayout;

// export const getServerSideProps = async (context) => {
//   // 검색 결과 API 호출
//   // props로 리턴
//   // context = 브라우저에서 요청받은 정보

//   // 주소에 있는 쿼리의 값 추출
//   const { q } = context.query;

//   let searchResults = [];

//   if (q) {
//     searchResults = await fetchSearchResults(q);
//   }

//   return {
//     props: { searchResults },
//   };
// };
