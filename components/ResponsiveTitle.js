import React from 'react';
import PropTypes from 'prop-types';

const ResponsiveTitle = ({ children }) => (
    <div>
        <style jsx>
            {`
            @media only screen and (max-width: 600px) and (min-width: 421px) {
                h1 {
                    font-size: 1.5em;
                }
            }

            @media only screen and (max-width: 420px) {
                h1 > :global(.hide-xs) {
                    display: none;
                }
            }

            @media only screen and (max-width: 270px) {
                h1 {
                    font-size: 1em;
                }
            }
        `}
        </style>

        <h1>{children}</h1>
    </div>
);

ResponsiveTitle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ResponsiveTitle;
