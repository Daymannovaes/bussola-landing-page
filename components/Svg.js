import ReactSVG from 'react-svg';
import { colors, PADDING_UNIT, BORDER_RADIUS } from '../config/style-guide';

export default ({ src, ...props }) => (
    <div className="svg">
        <style jsx>{`
            div {
                margin: 0 auto;
                margin-top: ${6 * PADDING_UNIT}px;
                padding: ${2 * PADDING_UNIT}px;
                border-radius: ${BORDER_RADIUS}px;

                transition: 200ms background;
            }

            div:hover {
                background: ${colors.transparent.light};
            }

            div :global(svg) {
                width: 100%;
            }

            @media only screen and (max-width: 740px) {
                div {
                    width: 580px;
                    overflow: auto;
                }

                div :global(svg) {
                    width: initial;
                }
            }

            @media only screen and (max-width: 620px) {
                div {
                    width: 360px;
                }

                div :global(svg) {
                    width: initial;
                }
            }
        `}</style>

        <ReactSVG src={src} {...props} />
    </div>
);