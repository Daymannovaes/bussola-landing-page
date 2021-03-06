import React, { Component } from 'react';
import getConfig from 'next/config';

import LayoutMain from '../components/LayoutMain';
import Link from '../components/Link';
import { colors, PADDING_UNIT } from '../config/style-guide';

const { publicRuntimeConfig: { pages = [] } } = getConfig();

export default class ErrorPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            path: '',
            filteredPages: ErrorPage.getPages(),
        };
    }

    static getPages() {
        return pages
            .filter(page => !page.match(/404/))
            .filter(page => !page.match(/^_/))
            .map(page => page.replace(/\.js$/, ''))
            .map(page => page.replace(/index/, 'home'))
            .map(page => ({ title: page, url: page === 'home' ? '/' : `/${page}` }));
    }

    componentDidMount() {
        this.setState({ path: document.location.pathname });
    }

    render() {
        const { path, filteredPages } = this.state;
        return (
            <LayoutMain>
                <div>
                    <style jsx>
                        {`
                    span {
                        color: ${colors.deepblue};
                    }

                    h3 {
                        font-size: 1em;
                    }

                    li {
                        font-size: 0.7em;
                        display: inline;
                    }

                    ul {
                        margin: 0;
                        padding: 0;
                        margin-top: 3em;
                    }

                    ul li:first-child {
                        margin: 0 ${PADDING_UNIT}px
                    }

                    li :global(a) {
                        padding: ${PADDING_UNIT}px ${PADDING_UNIT * 2}px;
                    }
                `}
                    </style>

                    <h1>Página não encontrada</h1>

                    <h3>Não conseguimos encontra a página <span>{path}</span></h3>
                    <ul>
                        <li>Tente alguma dessas</li>
                        {filteredPages.map(page => (
                            <li key={page.url}>
                                <Link href={page.url}>
                                    /{page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </LayoutMain>
        );
    }
}
