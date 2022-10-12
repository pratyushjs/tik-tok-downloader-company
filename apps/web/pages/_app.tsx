import 'windi.css';
import type {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import {NextIntlProvider} from 'next-intl';
import '../styles/main.css';
import theme from '../utils/theme';
/**
 * TikTokApp
 * @param {AppProps} arg0 App properties.
 * @return {JSX.Element}
 */
export default function TikTokApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <NextIntlProvider messages={pageProps.messages}>
                <Component {...pageProps} />
            </NextIntlProvider>
        </ChakraProvider>
    );
}
