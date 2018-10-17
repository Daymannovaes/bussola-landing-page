import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Flex from './Flex';

import {
    colors, PADDING_UNIT, MAIN_PADDING,
} from '../config/style-guide';

const LayoutMain = ({ children }) => (
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
        `}
        </style>

        <Flex container>
            <Logo />

            <Flex>
                <div className="container-body">
                    {children}
                </div>
            </Flex>
        </Flex>
    </main>
);

LayoutMain.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutMain;
