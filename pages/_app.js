import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';

import withGA from 'next-ga';
import nprogress from 'nprogress';

import LayoutMain from '../components/LayoutMain';

class MyApp extends App {
    constructor(props) {
        super(props);

        Router.onRouteChangeStart = () => nprogress.start();
        Router.onRouteChangeComplete = () => nprogress.done();
        Router.onRouteChangeError = () => nprogress.done();
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                    <title>Bussola.school - Desenvolvimento Pessoal</title>

                    <meta name="viewport" content="width=device-width" />
                    <meta name="description" content="Bussola.school - Desenvolvimento Pessoal" />
                    <meta name="viewport" content="initial-scale=1" />
                    <meta property="og:site_name" content="Bussola.school" />
                    <meta property="og:description" content="Bussola.school - Desenvolvimento Pessoal" />

                    <link rel="canonical" href="https://bussola.school" />
                    <link rel="shortcut icon" type="image/svg" href="https://bussola.school/static/icon.png" />

                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" />

                    {/* Import CSS for nprogress */}
                    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />

                    <style>
                        {`
                    body {
                        margin: 0;
                        padding: 0;
                    }
                `}
                    </style>
                </Head>

                <LayoutMain>
                    <Component {...pageProps} />
                </LayoutMain>
            </Container>
        );
    }
}

export default withGA('UA-79934445-2', Router)(MyApp);
