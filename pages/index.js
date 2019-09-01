
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import LayoutMain from '../components/LayoutMain';
import Link from '../components/Link';
import PostImg from '../components/PostImg';
import MailChimp from '../components/MailChimp';
import ResponsiveTitle from '../components/ResponsiveTitle';
import { PADDING_UNIT } from '../config/style-guide';

export default () => (
    <LayoutMain hideLogo>
        <div>
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

                header {
                    margin-bottom: 3em;
                }

                div h3 {
                    margin: ${5 * PADDING_UNIT}px 0;
                }

                section {
                    width: calc(100vw - 120px);
                    padding: 120px 60px;
                }

                #form, #proposito-4 {
                    background: #277ed6;
                    color: #e5f2ff;
                }

                #form :global(label), #proposito-4 :global(label) {
                    color: #e5f2ff;
                }

                div > :not(section), section :global(> *) {
                    max-width: 740px;
                    margin: 0 auto;
                    display: block;
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

                #post :global(a) {
                    text-transform: initial;
                    padding: 0 ${PADDING_UNIT}px;
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


                #thunder {
                    margin: -320px -60px -290px -60px;
                    max-width: initial;
                    width: calc(100% + 120px);
                    opacity: 0.1;
                }

                @media only screen and (max-width: 1200px) {
                    #thunder {
                        margin: -240px -60px;
                    }
                }
                @media only screen and (max-width: 900px) {
                    #thunder {
                        margin: -160px -60px;
                    }
                }
                @media only screen and (max-width: 600px) {
                    #thunder {
                        margin: -120px -60px;
                    }
                }
                @media only screen and (max-width: 270px) {
                    #thunder {
                        margin: -80px -60px;
                    }
                }
            `}
            </style>
            <header>
                <div id="title">
                    <ResponsiveTitle>Bussola<span className="hide-xs">.school</span></ResponsiveTitle>

                    <h2>
                        Escola de desenvolvimento pessoal
                    </h2>
                </div>

                <h3>
                    Na busca por despertar o potencial da consciência humana e integrar a humanidade.
                </h3>
            </header>

            <section className="bg1">
                <p>
                    O mundo está seguindo uma tendência exponencial e você encontrará dois tipos de visões: a pessimista e a otimista.
                </p>

                <p>
                    Nós sabemos que essas duas forças lutam entre si, e a tendência é que a polarização aumente: um futuro <strong className="bad">cada vez pior</strong> ou um futuro <strong className="good">cada vez melhor</strong>.
                </p>

                <img src="/static/thunder.png" id="thunder" alt="thunder" />

                <p>
                    Sabemos também que podemos <strong>contribuir ativamente</strong> para construir uma das duas realidades.
                </p>

                <p>
                    É por isso que a <strong className="good">Bussola</strong> está trabalhando para despertar o potencial das pessoas, desenvolvê-las e integrar a humanidade no <strong className="good">melhor futuro que conseguirmos criar.</strong>
                </p>

                <br />

                <p>
                    <Link href="/voce-nao-sabe-mas-voce-ja-esta-exercendo-seu-proposito-de-vida">Mesmo sem saber, você já está contribuindo para esse futuro.</Link>
                </p>
            </section>

            <section id="form">
                <p>
                    Já pensou no que te impede de viver uma vida que vale a pena ser vivida?
                </p>

                <MailChimp text="Se esse assunto te interessa, coloca seu email abaixo para saber como podemos te ajudar nisso!" buttonText="quero!" location="homepage" light />
            </section>

            <section id="proposito-1">
                <p>O que é um propósito de vida? Para que ele serve? Como posso construir o meu?</p>

                <p>Um propósito de vida é uma referência de futuro, como se fosse uma bússola temporal, algo que te ajuda a guiar sua vida.</p>

                <p>Quer saber como você pode usar seu passado e seu presente para definir seu futuro?</p>

                <p>O texto <Link href="/como-uma-referencia-temporal-pode-mudar-sua-vida">como uma bússola pode mudar a sua vida</Link> pode te ajudar.</p>

                <MailChimp text="Também podemos te ajudar pessoalmente, é só deixar seu email:" buttonText="quero ajuda!" location="homepage-2" placeholder="seu melhor email" />
            </section>

            <section id="proposito-2">
                <p>Se você já tem um propósito mas não sabe como fazer para conquistá-lo, talvez te falte mais clareza dos passos necessários para chegar lá.</p>

                <p>Talvez lhe falte motivação?</p>

                <p>Nós sabemos como pode ser difícil manter a motivação alta. Por isso escrevemos um texto <strong>descrevendo</strong> do que a motivação é composta</p>

                <Link nostyle href="/como-ter-motivacao-e-fazer-o-que-nos-propomos"><img src="/static/texto-1-diagrama-tarefas-2.svg" alt="Do que motivação é composta?" /></Link>

                <p>Basta clicar na imagem acima ou <Link href="/como-ter-motivacao-e-fazer-o-que-nos-propomos">clicar neste link.</Link></p>

                <MailChimp text="Receba conteúdo grátis com dicas para melhorar sua motivação:" buttonText="Quero receber!" location="homepage-3" />
            </section>

            <section id="proposito-3">
                <p>
                    Se não estiver plenamente convencido, esperamos ter pelo menos plantado a semente do propósito.
                </p>

                <Link nostyle href="/como-ter-proposito-de-vida"><PostImg src="/static/texto-2-cover.jpg" alt="Do que motivação é composta?" /></Link>

                <p>Pois como diria Nietzsche, aquele que tem um <strong>porquê</strong> supera qualquer <strong>como</strong>.</p>

                <p>O nosso texto mais completo sobre <Link href="/como-ter-proposito-de-vida">como desenvolver propósito de vida</Link> pode ser de grande ajuda também!</p>
            </section>


            <section id="proposito-4">
                <MailChimp text="Pra conversar pessoalmente com a gente sobre isso, é só deixar seu email!" buttonText="Quero conversar sobre propósito!" location="homepage-4" light />
            </section>
        </div>
    </LayoutMain>
);
