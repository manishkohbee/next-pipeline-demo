import Head from "next/head";

export default function Register() {

    const css =
        `
            html { margin: 0; height: 100%; overflow: hidden; }
            iframe { position: absolute; top: 0; right: 0; bottom: 0; left: 0; border: 0; }
        `

    return (

        <><Head>
            <style>
                {css}
            </style>
        </Head><iframe src="https://tally.so/r/3EkMEB?transparentBackground=1" width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="Lead generation form"></iframe></>
    )
}