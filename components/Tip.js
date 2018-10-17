import React from 'react';
import PropTypes from 'prop-types';
import { colors, PADDING_UNIT, BORDER_RADIUS } from '../config/style-guide';

const Tip = ({ children }) => (
    <p>
        <style jsx>
            {`
            p {
                border-left: ${PADDING_UNIT}px solid #e0e0e0;
                padding: ${2 * PADDING_UNIT}px ${4 * PADDING_UNIT}px;
                font-size: 0.9em;
                transition: 200ms all;
                border-radius: ${BORDER_RADIUS}px;
            }

            p:hover {
                background: ${colors.transparent.light};
            }
        `}
        </style>

        <i>{children}</i>
    </p>
);

Tip.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Tip;
