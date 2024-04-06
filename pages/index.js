import { fetchCountries } from '@/api';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home({ countries }) {
  const id = 'KOR';
  const router = useRouter();

  const onClickButton = () => {
    router.push('/search');
  };

  // 브라우저에서 clg를 하기 위함
  useEffect(() => {
    console.log(countries);
  }, []);

  return (
    <div>
      Home Page
      <div>
        <button onClick={onClickButton}>페이지 이동</button>
        {/* <Link href={'/search'}>Search Page 이동</Link> */}
      </div>
      <div>
        <Link
          href={{
            pathname: '/country/[id]',
            query: { id },
          }}
        >
          페이지로 이동
        </Link>
        {/* <Link href={`/country/${id}`}>페이지로 이동</Link> */}
      </div>
      {countries.map((contry, index) => {
        return <div key={index}>{contry.commonName} </div>;
      })}
    </div>
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
