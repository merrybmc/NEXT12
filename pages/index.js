import { fetchCountries } from '@/api';
import CountryList from '../components/CountryList';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home({ countries }) {
  const id = 'KOR';
  const router = useRouter();

  const onClickButton = () => {
    router.push('/search');
  };

  return (
    <>
      <SearchBar />
      <CountryList countries={countries} />
    </>
  );
}

export const getStaticProps = async () => {
  // SSR을 위해 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수
  // 반드시 props 객체를 반환해야됨

  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
};
