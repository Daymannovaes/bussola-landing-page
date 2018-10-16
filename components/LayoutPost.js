import Logo from './Logo';
import Flex from './Flex';

import { colors, PADDING_UNIT, POST_SECTION_PADDING, POST_WIDTH, POST_ASSET_WIDTH } from '../config/style-guide';

export default ({ children }) => (
    <section>
        <style jsx>{`
            :global(main) {
                background: ${colors.lightwhite} !important;
            }

            section {
                color: ${colors.lightblack};
                text-align: left;
                line-height: 1.6;
                letter-spacing: -.004em;

                margin: 0 auto;
                padding-left: ${POST_SECTION_PADDING}px
                padding-right: ${POST_SECTION_PADDING}px;

                font-size: 0.9em;
            }

            section article :global(> *) {
                max-width: ${POST_WIDTH}px;
                margin-left: auto;
                margin-right: auto;
            }

            section :global(ul) {
                list-style: none;
            }

            section :global(p) {
                margin-top: ${6 * PADDING_UNIT}px;
                margin-bottom: 0;
            }

            section :global(h2), section :global(h3), section :global(h4) {
                text-shadow: initial;
                text-transform: initial;
                max-width: ${POST_ASSET_WIDTH}px !important;
                font-weight: 900;
                margin-top: ${6 * PADDING_UNIT}px;
            }

            section :global(h3), section :global(h4) {
                margin-bottom: -${3 * PADDING_UNIT}px;
                padding: ${2 * PADDING_UNIT}px ${4 * PADDING_UNIT}px;
                border-bottom: 4px dotted #00000020;
                transition: 200ms all;
            }

            section :global(h3:hover), section :global(h4:hover) {
                border-bottom: 4px dotted #00000050;
            }
        `}</style>

        <article>
            {children}
        </article>
    </section>
);
