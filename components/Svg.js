import React from 'react';
import ReactSVG from 'react-svg';
import {
    colors, PADDING_UNIT, MAIN_PADDING, POST_SECTION_PADDING, BORDER_RADIUS, POST_ASSET_WIDTH,
} from '../config/style-guide';

const SVG_PADDING = 2 * PADDING_UNIT;

export default ({ src, ...props }) => (
    <div className="svg">
        <style jsx>
            {`
            div {
                margin: 0 auto;
                margin-top: ${6 * PADDING_UNIT}px;
                padding: ${SVG_PADDING}px;
                border-radius: ${BORDER_RADIUS}px;

                width: calc(100vw - ${MAIN_PADDING * 2 + POST_SECTION_PADDING * 2 + SVG_PADDING * 2}px);
                max-width: ${POST_ASSET_WIDTH}px !important;

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
                    overflow: auto;
                }

                div :global(svg) {
                    width: initial;
                }
            }
        `}
        </style>

        <ReactSVG src={src} {...props} />
    </div>
);
