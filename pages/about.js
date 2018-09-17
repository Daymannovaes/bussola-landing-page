import React, { Component } from 'react';
import MailChimp from '../components/MailChimp';

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
            `}</style>

            <h1>Bussola.school</h1>

            <MailChimp inputRef={this.inputRef} animate />
        </div>
    }
};
