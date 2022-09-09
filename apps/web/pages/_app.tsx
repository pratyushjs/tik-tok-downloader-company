import 'windi.css';
import type {AppProps} from 'next/app';
import '../styles/main.css';
/**
 * TikTokApp
 * @param {AppProps} arg0 App properties.
 * @return {JSX.Element}
 */
export default function TikTokApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}
