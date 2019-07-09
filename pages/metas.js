import React from 'react';
import Head from 'next/head';
import { PADDING_UNIT, BORDER_RADIUS } from '../config/style-guide';

export default () => (
    <div>
        <Head>
            <meta property="og:description" content="Quais são as suas metas?" />
        </Head>

        <style jsx>{`
        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .iframeWrapper {
            position: relative;
            padding-bottom: 50.25%;
            padding-top: 30px;
            height: 0;
            overflow: hidden;

            min-width: calc(90vw - ${4 * PADDING_UNIT}px);
            border-radius: ${2 * BORDER_RADIUS}px;
        }

        iframe{ position: absolute; left:0; right:0; bottom:0; top:0; border:0; }
    `}
        </style>

        <iframe title="Workshop de Propósito - feedback" id="typeform-full" width="100%" height="100%" frameBorder="0" src="https://dayman.typeform.com/to/Fz1Iq1" /> <script type="text/javascript" src="https://embed.typeform.com/embed.js" />
    </div>
);
