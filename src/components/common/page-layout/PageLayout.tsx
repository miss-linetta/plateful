import { ReactNode } from 'react';
import Footer from '../footer';
import Header from '../header';
import Head from 'next/head';

interface PageLayoutProps {
  children?: ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
  className?: string;
}

const PageLayout = ({
  children,
  hasHeader = true,
  hasFooter = true,
}: PageLayoutProps) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {hasHeader && <>{hasHeader && <Header />}</>}
        {children}
        {hasFooter && <Footer />}
      </main>
    </>
  );
};

export default PageLayout;
