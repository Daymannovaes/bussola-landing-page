import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Flex from './Flex';

import {
    colors, PADDING_UNIT, MAIN_PADDING,
} from '../config/style-guide';

const LayoutMain = ({ hideLogo, children }) => (
    <main>
        <style jsx>
            {`
            main {
                background: ${colors.gray};
                font-size: 1.5em;
                color: ${colors.lightblue};
                padding: ${MAIN_PADDING}px;
                text-align: center;
                font-family: 'Open Sans', sans-serif;
            }

            main :global(h1), main :global(h2), main :global(h3) {
                text-shadow: 0px 4px #0000001c;

                margin: ${PADDING_UNIT}px 0;
            }

            main :global(h1), main :global(h2) {
                font-weight: 900;
                color: ${colors.deepblue};
            }

            main :global(h1) {
                text-transform: uppercase;
            }

            main :global(h3) {
                font-weight: 100;
                color: ${colors.lightblue};
            }

            .hide {
                display: none;
            }
        `}
        </style>

        <Flex container>
            {hideLogo ? <React.Fragment></React.Fragment> : <Logo />}

            <Flex>
                {children}
            </Flex>
        </Flex>
    </main>
);

LayoutMain.propTypes = {
    children: PropTypes.node.isRequired,
    hideLogo: PropTypes.bool,
};

LayoutMain.defaultProps = {
    hideLogo: false,
};

export default LayoutMain;
