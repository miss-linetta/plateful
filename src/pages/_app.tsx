import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
