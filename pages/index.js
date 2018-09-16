import Link from '../components/Link'
import { PADDING_UNIT } from '../config/style-guide';

export default () => (
    <div>
        <style jsx>{`
            @media only screen and (max-width: 600px) and (min-width: 421px) {
                h1 {
                    font-size: 1.5em;
                }
            }

            @media only screen and (max-width: 420px) {
                h1 > span {
                    display: none;
                }
            }

            @media only screen and (max-width: 270px) {
                h1, h2 {
                    font-size: 1em;
                }
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
        `}</style>

        <h1>Bussola<span>.school</span></h1>
        <h3>
            Escola de desenvolvimento pessoal
        </h3>

        <h4>
            <Link href="/about">Quero saber mais</Link>
        </h4>
    </div>
);
