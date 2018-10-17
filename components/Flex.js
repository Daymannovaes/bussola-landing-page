import React from 'react';
import PropTypes from 'prop-types';

const Flex = ({ children, container }) => (
    <div className="flex">
        <style jsx>
            {`
            div {
                margin: 0;

                ${container ? 'min-height: 100vh' : ''};
                flex-grow: ${container ? '0' : '1'};

                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;
            }
        `}
        </style>

        {children}
    </div>
);

Flex.propTypes = {
    children: PropTypes.node.isRequired,
    container: PropTypes.bool,
};

Flex.defaultProps = {
    container: false,
};

export default Flex;
