import React from 'react';
import Link from 'next/link';

import { colors } from '../config/style-guide';

export default ({
    children, noprefetch, nostyle, ...rest
}) => (
    <React.Fragment>
        <style jsx>
            {`
            a.styled-link {
                color: ${colors.lightblue};
                text-transform: uppercase;
                transition: 200ms all;
            }

            a.styled-link:hover {
                background: #e9e8e8;
            }

            a.nostyled-link {
                text-decoration: none;
            }
        `}
        </style>

        <Link prefetch={!noprefetch} {...rest}>
            <a className={nostyle ? 'nostyled-link' : 'styled-link'}>
                {children}
            </a>
        </Link>
    </React.Fragment>
);
