import Link from 'next/link';
import css from 'styled-jsx/css';

import { colors } from '../config/style-guide';

export default ({ children, noprefetch, nostyle, ...rest }) => (
    <React.Fragment>
        <style jsx>{`
            a.styled-link {
                color: ${colors.lightblue};
                text-transform: uppercase;
                transition: 200ms all;
            }

            a.styled-link:hover {
                background: #e9e8e8;
            }
        `}</style>

        <Link prefetch={!noprefetch}  {...rest}>
            <a className={nostyle ? '' : 'styled-link'}>
                {children}
            </a>
        </Link>
    </React.Fragment>
);
