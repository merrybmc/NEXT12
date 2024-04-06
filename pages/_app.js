import Layout from '@/components/Layout';
import '@/styles/global.css';

export default function App({ Component, pageProps }) {
  const EmptySubLayout = ({ children }) => {
    return <>{children}</>;
  };

  const SubLayout = Component.Layout || EmptySubLayout;
  return (
    <Layout>
      <SubLayout>
        <Component {...pageProps} />
      </SubLayout>
    </Layout>
  );
}
