import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const id = 'KOR';
  const router = useRouter();

  const onClickButton = () => {
    router.reload('/search');
  };
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
    </div>
  );
}
