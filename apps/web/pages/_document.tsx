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
