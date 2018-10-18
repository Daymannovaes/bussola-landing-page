import React from 'react';
import Link from '../components/Link';
import ResponsiveTitle from '../components/ResponsiveTitle';
import { PADDING_UNIT, LOGO_HEIGHT } from '../config/style-guide';

export default () => (
    <div>
        <style jsx>
            {`
            @media only screen and (max-width: 270px) {
                h3 {
                    font-size: 0.7em;
                }
            }

            h4 {
                font-weight: 100;
                margin: 0;
                margin-top: 3em;
            }

            div :global(a) {
                padding: ${PADDING_UNIT}px ${PADDING_UNIT * 2}px;
            }

            div {
                margin-top: -${LOGO_HEIGHT / 2}em;
            }
        `}
        </style>

        <ResponsiveTitle>Bussola<span className="hide-xs">.school</span></ResponsiveTitle>

        <h3>
            Escola de desenvolvimento pessoal
        </h3>

        <h4>
            <Link href="/about">Quero saber mais</Link>
        </h4>
    </div>
);
