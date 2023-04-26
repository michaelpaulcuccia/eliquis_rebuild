import '@/styles/globals.css';
import PageLayout from '../layout/PageLayout'

export default function App({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
