import React from 'react';
import Svg from './Svg';

export default ({ src, ...props }) => (
    <React.Fragment>
        <style jsx>
            {`
            :global(g[id$="group"] path) {
                transition: 200ms all;
            }

            :global(g[id$="group"]:hover path) {
                fill-opacity: 0.9;
            }
        `}
        </style>

        <Svg src={src} {...props} />
    </React.Fragment>
);
