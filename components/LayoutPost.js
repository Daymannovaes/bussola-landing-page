import Logo from './Logo';
import Flex from './Flex';

import { colors, PADDING_UNIT, POST_WIDTH } from '../config/style-guide';

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

                max-width: ${POST_WIDTH}px;
                margin: 0 auto;
                padding-left: ${4 * PADDING_UNIT}px;
                padding-right: ${4 * PADDING_UNIT}px;

                font-size: 0.9em;
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
                font-weight: 900;
                margin-top: ${6 * PADDING_UNIT}px;
                margin-bottom: -${3 * PADDING_UNIT}px;
            }
        `}</style>

        <article>
            {children}
        </article>
    </section>
);
