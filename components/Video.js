import React from 'react';
import PropTypes from 'prop-types';
import { PADDING_UNIT, BORDER_RADIUS } from '../config/style-guide';

const Video = ({ src, title, ...props }) => (
    <div>
        <style jsx>{`
        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        div {
            position: relative;
            padding-bottom: 50.25%;
            padding-top: 30px;
            height: 0;
            overflow: hidden;

            min-width: calc(90vw - ${4 * PADDING_UNIT}px);
            border-radius: ${2 * BORDER_RADIUS}px;
        }
    `}
        </style>

        <iframe title={title} width={1344} height={608} src={src} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen {...props} />
    </div>
);

Video.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Video;
