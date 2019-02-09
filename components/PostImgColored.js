import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostImg from './PostImg';

// Slightly modified version to quickly return a string
// https://stackoverflow.com/a/5624139/1218980
function hexToRgb(color) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const hex = color.replace(shorthandRegex, (m, r, g, b) => (
        r + r + g + g + b + b
    ));

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${[
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
    ].join(', ')})` : color;
}

function extractColorFromString(rgb) {
    let [, r, g, b] = rgb.match(/rgba?\((\d+), ?(\d+), ?(\d+)/);
    r = parseInt(r, 10);
    g = parseInt(g, 10);
    b = parseInt(b, 10);

    return [r, g, b];
}

function getColorFromElement(element) {
    const color = hexToRgb(window.getComputedStyle(element, null)['background-color']);

    return extractColorFromString(color);
}

export default class PostImgColored extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();

        this.startPercentage = 0.7;
        this.endPercentage = 0.3;
        this.midPercentage = (this.startPercentage + this.endPercentage) / 2;

        this.range = this.startPercentage - this.endPercentage;
        this.halfRange = this.range / 2;

        this.ticking = false;
        this.didChange = false;

        this.speed = 2;
    }

    componentDidMount() {
        this.mainElement = window.document.querySelector('main');

        this.initialRGB = getColorFromElement(this.mainElement);

        const { bgColor: finalRGB } = this.props;
        this.diffRGB = [
            finalRGB[0] - this.initialRGB[0],
            finalRGB[1] - this.initialRGB[1],
            finalRGB[2] - this.initialRGB[2],
        ];

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (!this.ticking) {
            this.ticking = true;

            const percentage = this.getDistanceFromMidPercentage(this.getPercentageHeight());

            if (percentage === 0) {
                this.ticking = false;
                if (!this.didChange) return null;

                this.didChange = false;
                return this.mainElement.removeAttribute('style');
            }

            this.didChange = true;

            window.requestAnimationFrame(() => {
                const finalRGB = [
                    this.initialRGB[0] + (percentage * this.diffRGB[0]),
                    this.initialRGB[1] + (percentage * this.diffRGB[1]),
                    this.initialRGB[2] + (percentage * this.diffRGB[2]),
                ];

                this.mainElement.setAttribute('style', `background-color: rgb(${finalRGB[0]}, ${finalRGB[1]}, ${finalRGB[2]}) !important;`);

                this.ticking = false;
            });
        }

        return null;
    };

    getPercentageHeight = () => {
        const viewport = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        const elementOffset = this.ref.current.getBoundingClientRect().top;

        const imageHeight = this.ref.current.querySelector('img').offsetHeight;
        const offsetMiddle = elementOffset + (imageHeight / 2);

        return offsetMiddle / viewport;
    };

    getDistanceFromMidPercentage = (height) => {
        const dist = Math.abs(this.midPercentage - height);
        const percentDiff = 1 - ((dist ** this.speed) / (this.halfRange ** this.speed));

        return Math.max(0, percentDiff);
    };

    render() {
        const { props } = this;
        const { src } = props;

        return (
            <div ref={this.ref}>
                <PostImg src={src} {...props} />
            </div>
        );
    }
}

PostImgColored.propTypes = {
    src: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
};
