import PageLayout from '@/components/common/page-layout/PageLayout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </QueryClientProvider>
  );
}
