import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeadShake from 'react-reveal/HeadShake';

export default class AnimateForever extends Component {
    constructor(props) {
        super(props);

        this.state = { animate: false };
        this.animateInterval = Math.max(5 * 1000, props.animateInterval || 0);
        this.delay = props.delay || 0;
    }

    componentDidMount() {
        setTimeout(() => this.animateForever(), this.delay);
    }

    componentWillUnmount() {
        clearTimeout(this.animateTimeout);
    }

    animateForever = () => {
        this.setState({ animate: true });
        setTimeout(() => this.setState({ animate: false }), this.animateInterval / 2);

        clearTimeout(this.animateTimeout);
        this.animateTimeout = setTimeout(this.animateForever.bind(this), this.animateInterval);
    }

    render() {
        const { animate } = this.state;
        const { children } = this.props;

        return (
            <HeadShake when={animate}>
                {children}
            </HeadShake>
        );
    }
}

AnimateForever.propTypes = {
    animateInterval: PropTypes.number,
    delay: PropTypes.number,
    children: PropTypes.node.isRequired,
};

AnimateForever.defaultProps = {
    animateInterval: 0,
    delay: 0,
};
