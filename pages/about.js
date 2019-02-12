import React from 'react';
import ResponsiveTitle from '../components/ResponsiveTitle';
import MailChimp from '../components/MailChimp';
import Video from '../components/Video';
import { PADDING_UNIT, BORDER_RADIUS } from '../config/style-guide';

export default () => (
    <div>
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
    `}
        </style>

        <ResponsiveTitle>Bussola<span className="hide-xs">.school</span></ResponsiveTitle>

        <h3>O que é a Escola Bussola?</h3>

        <Video title="O que é a Bussola.school?" src="https://www.youtube.com/embed/ovFOiN_RWsc" />

        <MailChimp text="Para saber mais, coloque aqui seu melhor email aqui:" placeholder="> email aqui <" buttonText="quero saber mais sobre propósito!" />

    </div>
);
