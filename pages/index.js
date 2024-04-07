import { fetchCountries } from '@/api';
import CountryList from '../components/CountryList';
import SearchBar from '@/components/SearchBar';
import Head from 'next/head';

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>NARAS 🌍</title>
        <meta property='og:image' content='/thumbnail.png' />
        <meta property='og:title' content='NARAS' />
        <meta property='og:description' content='전 세계 국가들의 정보를 확인해보세요.' />
      </Head>
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
