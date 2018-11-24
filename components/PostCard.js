import React from 'react';
import PropTypes from 'prop-types';

import { colors, BORDER_RADIUS } from '../config/style-guide';
import Link from './Link';

const PostCard = ({ cover, children, href }) => (
    <div className="postCard">
        <style jsx>{`
            .postCard {
                max-width: 500px;
                display: inline-block;
                border-radius: ${BORDER_RADIUS}px;

                margin: 0 36px;
                cursor: pointer;

                border: 2px solid transparent;
            }

            .head, .body {
                overflow: hidden;
                color: white;

                transition: 600ms all;
            }

            img, .head {
                border-radius: ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0 0;
            }

            img {
                width: calc(100%);
                margin: 0 auto;
                display: block;
            }

            .head {
                height: 200px;
                background: ${colors.transparent.midlight};
            }

            .body {
                background: ${colors.deepblue};
                border-top: none;
                border-radius: 0 0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px;

                min-height: calc(200px - 40px);
                padding: 20px;
                font-size: 0.8em;
            }

            .postCard:hover .head {
                background: ${colors.transparent.light};
            }

            .postCard:hover .body {
                background: ${colors.strongblue};
            }

        `}
        </style>
        <Link nostyle href={`${href}?from=postcard`}>
            <div className="head">
                <img src={cover} alt={cover} />
            </div>

            <div className="body">
                {children}
            </div>
        </Link>
    </div>
);

PostCard.propTypes = {
    cover: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
};

export default PostCard;
