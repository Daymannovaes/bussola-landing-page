import React, { Component } from 'react';
import MailChimp from '../components/MailChimp';
import ResponsiveTitle from '../components/ResponsiveTitle';
import { LOGO_HEIGHT } from '../config/style-guide';

export default class AboutPage extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }
    componentDidMount() {
        this.inputRef.current && this.inputRef.current.focus();
    }

    render() {
        return <div>
            <style jsx>{`
                h1 {
                    display: initial;
                }

                div {
                    margin-top: -${LOGO_HEIGHT/2}em;
                }
            `}</style>

            <ResponsiveTitle>Bussola<span className="hide-xs">.school</span></ResponsiveTitle>

            <MailChimp inputRef={this.inputRef} animate />
        </div>
    }
};
