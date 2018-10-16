import React from 'react';

import { BORDER_RADIUS, POST_ASSET_WIDTH } from '../config/style-guide';

export default ({ ...props }) => (
    <p>
        <style jsx>{`
            p {
                max-width: ${POST_ASSET_WIDTH}px !important;
            }

            img {
                width: 100%;
                border-radius: ${BORDER_RADIUS}px;
            }
        `}</style>

        <img {...props} />
    </p>
);
