import React from 'react'
import App, { Container } from 'next/app';
import Head from 'next/head';

import Logo from '../components/Logo';
import LayoutMain from '../container/LayoutMain';

class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props;

        return <Container>
            <Head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

                <title>Bussola.school - Desenvolvimento Pessoal</title>

                <meta name="viewport" content="width=device-width"/>
                <meta name="description" content="Bussola.school - Desenvolvimento Pessoal"/>
                <meta name="viewport" content="initial-scale=1"/>
                <meta property="og:site_name" content="Bussola.school"/>
                <meta property="og:description" content="Bussola.school - Desenvolvimento Pessoal" />

                <link rel="canonical" href="https://bussola.school"/>
                <link rel="shortcut icon"  type="image/svg" href="https://bussola.school/static/logo.png"/>
            </Head>

            <LayoutMain>
                <Component {...pageProps} />
            </LayoutMain>
        </Container>
    }
}

export default MyApp;
