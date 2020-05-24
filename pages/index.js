
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import LayoutMain from '../components/LayoutMain';
import Logo from '../components/Logo';
import Flex from '../components/Flex';
import MailChimp from '../components/MailChimp';
import ResponsiveTitle from '../components/ResponsiveTitle';
import { PADDING_UNIT } from '../config/style-guide';

export default () => (
    <LayoutMain hideLogo hidePadding>
        <div className="index">
            <Head>
                <meta name="google-site-verification" content="aFUa4OCasgi_PmWe855lK7IlNCW2HuFS3jUWEyewnOU" />
            </Head>

            <style jsx>
                {`
                @media only screen and (max-width: 270px) {
                    h3 {
                        font-size: 0.7em;
                    }
                }

                div h3 {
                    margin: ${5 * PADDING_UNIT}px 0;
                }

                section {
                    width: calc(100vw - 120px);
                    padding: 120px 60px;
                }
                section p {
                    margin: 2em auto;
                }

                #proposito-2 {
                    background: #e0e0e0;
                }

                section img {
                    max-width: 100%;
                }

                #title {
                    position: relative;
                    display: inline-block;
                    margin-bottom: ${7 * PADDING_UNIT}px;
                }

                #title h1 {
                    display: inline-block;
                }

                #title h2 {
                    position: absolute;
                    right: 0;
                    font-size: 0.8em;
                    margin-top: -15px;
                    font-weight: 100;
                    color: #58838e;
                    text-align: right;
                    text-shadow: none;
                }

                .bg1 {
                    background: #e0e0e0;
                }

                .bad {
                    color: #c74242;
                }

                .good {
                    color: #4949d9;
                }

                .index > section:nth-child(odd) {
                    background: #0157a7;
                    color: white;
                }

                header {
                    background: url(/static/forest-fog.jpg) no-repeat center;
                    background-size: cover;
                }

                header :global(h1) {
                    color: white;
                    text-shadow: 0px 6px 1px #0000003d;
                }

                header :global(h3) {
                    color: white;
                    text-transform: uppercase;
                    max-width: 740px;
                    font-weight: bold;
                    color: #ffffff;
                    text-shadow: 0px 6px 1px #0000003d;
                }

                header :global(.logo) {
                    top: -60px;
                    position: relative;
                    margin-top: -65px;
                }

                @media only screen and (max-width: 610px) {
                    header :global(.logo) {
                        top: -30px;
                        margin-top: -30px;
                    }
                }

                #form {
                    padding-top: 80px;
                    padding-bottom: 80px;
                    color: #30444a;
                }
            `}
            </style>
            <header>
                <Flex container>
                    <Logo />
                    <div id="title">
                        <ResponsiveTitle>Bussola<span className="hide-s">.school</span></ResponsiveTitle>
                    </div>

                    <h3>
                        Na busca por descobrir a melhor maneira de construir uma vida que faça sentido.
                    </h3>
                </Flex>
            </header>

            <section id="form">
                <MailChimp text="Faça parte dessa comunidade:" placeholder="seu melhor email" buttonText="participar!" location="homepage" />
            </section>

            <section id="proposito-1">
                <p>Nós somos uma escola, uma comunidade, um grupo de pessoas com o objetivo de construir uma vida que faça sentido.</p>

                <p>Nosso propósito é te ajudar a <strong>progredir consistentemente</strong> nos seus objetivos pessoais.</p>

                <br />

                <p>Mas não somos uma "escola de produtividade".</p>

                <p>Progresso consistente não é sobre produtividade. É sobre saber construir objetivos alinhados com seus valores.</p>

                <p>Não é sobre atingir metas. É sobre como definir as metas.</p>

                <br />

                <p>É sobre como saber quem você é. É sobre o contínuo processo de aprender a se compreender.</p>

                <p>À partir desse processo, ter <strong>progresso consistente</strong> é uma consequência natural.</p>

                <p>À partir desse processo, construir ao redor de si, um contexto de vida que seja significativo e que ressoe com sua identidade, é uma consequência natural.</p>

                <p>Uma consequência maravilhosa.</p>

                <p>Quer entrar com a gente nessa jornada?</p>

                <MailChimp text="" buttonText="entrar para a jornada" location="homepage-2" placeholder="Deixe seu email aqui :)" light />
            </section>

            <section id="proposito-4">
                <p>Vejo você logo.</p>
                <p>:)</p>
            </section>
        </div>
    </LayoutMain>
);
