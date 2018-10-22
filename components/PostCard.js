import React from 'react';
import PropTypes from 'prop-types';

import { colors, BORDER_RADIUS } from '../config/style-guide';

const PostCard = ({ cover, children }) => (
    <div className="postCard">
        <style jsx>{`
            .postCard {
                color: white;
                width: 300px;
                border-radius: ${BORDER_RADIUS}px;
            }

            .head, .body {
                height: 300px;
            }

            img {
                width: 100%;
                border-radius: ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0 0;
                display: block;
            }

            .body {
                border: 2px solid ${colors.lightblue};
                background: ${colors.lightblue};
                border-top: none;
                border-radius: 0 0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px;
            }

        `}
        </style>
        <div className="head">
            <img src={cover} alt={cover} />
        </div>

        <div className="body">
            {children}
        </div>
    </div>
);

PostCard.propTypes = {
    cover: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default PostCard;
