import React, { Component } from 'react';
import HeadShake from 'react-reveal/HeadShake';
import { colors, BORDER_RADIUS } from '../config/style-guide';

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = { animate: false };
        this.animateInterval = Math.max(5 * 1000, props.animateInterval || 0);
    }

    componentDidMount() {
        this.setState({ animate: true });

        this.props.animateForever && this.animateForever();
    }

    animateForever = () => {
        setTimeout(() => this.setState({ animate: false }), this.animateInterval/2);

        clearTimeout(this.animateTimeout);
        this.animateTimeout = setTimeout(() => {
            this.setState({ animate: true });
            this.animateForever();
        }, this.animateInterval);
    }

    render() {
        return <button>
            <style jsx>{`
                button {
                    color: white;
                    background: ${colors.midblue};
                    border-radius: ${BORDER_RADIUS}px;
                    font-weight: bold;
                    font-size: 0.6em;
                    border: 0;
                    border-bottom: 6px solid ${colors.deepblue};
                    transition: 80ms all;

                    display: inherit;
                }

                button:hover {
                    border-width: 4px;
                }

                button:active, button:focus {
                    border-width: 0px;
                }
            `}</style>

            {this.props.children}
        </button>
    }
}
