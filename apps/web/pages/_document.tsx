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
                <Head></Head>
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
