import Logo from './Logo';
import Flex from './Flex';

import { colors, PADDING_UNIT } from '../config/style-guide';

export default ({ children }) => (
    <main>
        <style jsx>{`
            main {
                background: ${colors.gray};
                font-size: 1.5em;
                color: ${colors.lightblue};
                text-align: center;
                font-family: 'Open Sans', sans-serif;
            }

            main :global(h1), main :global(h2), main :global(h3) {
                text-shadow: 0px 4px #dedede;

                margin: ${PADDING_UNIT}px 0;
            }

            main :global(h1), main :global(h2) {
                text-transform: uppercase;
                font-weight: 900;
                color: ${colors.deepblue};
            }

            main :global(h3) {
                font-weight: 100;
                color: ${colors.lightblue};
            }
        `}</style>
        <Logo absolute />

        <Flex>
            {children}
        </Flex>
    </main>
);
