import React from 'react';
import PropTypes from 'prop-types';
import { colors, PADDING_UNIT, BORDER_RADIUS } from '../config/style-guide';

const Button = ({ children }) => (
    <button>
        <style jsx>
            {`
        button {
            color: white;
            background: ${colors.midblue};
            border-radius: ${BORDER_RADIUS}px;
            font-weight: bold;
            font-size: 0.6em;
            border: 0;
            border-bottom: 6px solid ${colors.deepblue};
            transition: 80ms all;

            padding: ${PADDING_UNIT}px ${2 * PADDING_UNIT}px;

            display: inherit;
        }

        button :global(a) {
            color: white;
        }

        button:hover {
            border-width: 4px;
        }

        button:active, button:focus {
            border-width: 0px;
        }
    `}
        </style>

        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Button;
