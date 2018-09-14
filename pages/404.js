import React, { Component } from 'react';
import Link from 'next/link'
import { colors } from '../config/style-guide';

export default class ErrorPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            path: ''
        };
    }
    componentDidMount() {
        this.setState({ path: document.location.pathname });
    }
    render() {
        return (<div>
            <style jsx>{`
                span {
                    color: ${colors.deepblue};
                }

                h3 {
                    font-size: 1em;
                }
            `}</style>

            <h1>Page not found</h1>

            <h3>We couldn't find the page <span>{this.state.path}</span></h3>
        </div>);
    }
};
