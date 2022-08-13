/* eslint-disable @next/next/no-img-element */
import Document, { Html, Head, Main, NextScript } from "next/document"
import { FB_PIXEL_ID } from "../lib/fbpixel"

export default class MyDocument extends Document {
    render() {
        return (
            <Html className="dark">
                <Head>
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            style={{ display: "none" }}
                            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                            alt=""
                        />
                    </noscript>
                </Head>
                <body className="dark:bg-kohbeeblack">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}