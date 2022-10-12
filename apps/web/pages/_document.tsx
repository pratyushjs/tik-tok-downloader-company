import Document, {Head, Html, Main, NextScript} from 'next/document';
import {BodyComponent} from '../components/Body';

/**
 * @class TikTokDocument
 */
export default class TikTokDocument extends Document {
    /**
     * Render TikTokDocument
     * @return {JSX.Element}
     */
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Poppins&display=optional"
                        rel="stylesheet"
                    ></link>
                    <meta name="description" content="Free TikTok downloader without watermark online. Save TikTok videos in high quality in MP3 or MP4 files. Easy to use, fast and safe video TikTok downloader. " />
                    <meta name='title' content="TikTok Downloader: Download TikTok Videos Without Watermark (HD)"/>
                </Head>
                <body>
                    <BodyComponent>
                        <Main />
                    </BodyComponent>
                    <NextScript />
                </body>
            </Html>
        );
    }
}
