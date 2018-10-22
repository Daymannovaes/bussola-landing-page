import React from 'react';
import Link from '../components/Link';
import PostCard from '../components/PostCard';
import MailChimp from '../components/MailChimp';
import ResponsiveTitle from '../components/ResponsiveTitle';
import { PADDING_UNIT } from '../config/style-guide';

export default () => (
    <div>
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
                margin-top: ${5 * PADDING_UNIT}px;
            }

            div :global(a) {
                padding: 0 ${PADDING_UNIT}px;
            }


            section {
                width: calc(100vw - 60px);
                padding: 30px;
            }

            #form {
                background: #277ed6;
                color: #e5f2ff;

                width: calc(100vw - 60px);
                padding: 30px;

                margin: ${10 * PADDING_UNIT}px 0;
            }

            div > :not(section), section :global(> *) {
                max-width: 740px;
                margin: 0 auto;
            }

            #post :global(a) {
                text-transform: initial;
            }
        `}
        </style>
        <header>
            <ResponsiveTitle>Bussola<span className="hide-xs">.school</span></ResponsiveTitle>

            <h2>
                Escola de desenvolvimento pessoal
            </h2>

            <h3>
                Nós guiamos pessoas até atingirem seus objetivos.
            </h3>
        </header>

        <section id="form">
            <p>
                Já pensou no que te impede de seguir seu propósito plenamente e de conquistar seus objetivos?
            </p>

            <MailChimp text="Se esse assunto te interessa, coloca seu email abaixo para saber como podemos te ajudar nisso!" buttonText="cadastrar" light />
        </section>

        <section id="post">
            <p>
                Se ainda não está convencido, nós escrevemos um texto que pode te ajudar. Ele detalha um dos assuntos que dominamos:{' '}
                <Link href="/como-ter-motivacao-e-fazer-o-que-nos-propomos">como ter motivação e usar isso para encontrar o seu propósito!</Link>
            </p>
            <br />
            <PostCard cover="/static/texto-1-cover.jpg">
                Como ter motivação?
            </PostCard>
        </section>
    </div>
);
