import 'windi.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/main.css';
/**
 * TikTokApp
 * @param {AppProps} arg0 App properties.
 * @return {JSX.Element}
 */
export default function TikTokApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>);
}
