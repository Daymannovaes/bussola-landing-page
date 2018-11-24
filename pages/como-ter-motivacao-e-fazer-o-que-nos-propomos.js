/* eslint-disable */
import React from 'react';

import LayoutPost from '../components/LayoutPost';
import PostImg from '../components/PostImg';
import MailChimp from '../components/MailChimp';
import Tip from '../components/Tip';
import Diagrama from '../components/texto-1-diagrama';

export default () => (
    <LayoutPost title="Como ter motivação e sempre fazer o que nos propomos?" date={1539970091528} id="como-ter-motivacao-e-fazer-o-que-nos-propomos">
        <h3>Por que não temos motivação?</h3>

        <p>Poucas coisas na vida nos dão muita motivação. E para piorar, raramente são as mesmas coisas que temos obrigação de fazer.</p>

        <p>Como mostra o diagrama abaixo, passamos a maior parte de nossas vidas, fazendo tarefas que não queremos estar fazendo, ou que não estamos plenamente felizes ao fazê-las, o que não contribuem de forma clara para o nosso futuro.</p>

        <Diagrama src="/static/texto-1-diagrama-tarefas-2.svg" />

        <p>Existem muitos fatores que contribuem para manter esses três círculos separados e, com certeza, a falta de compreensão de do que é composto nossa <strong>motivação</strong> é um deles.</p>

        <p>Nesse texto completo, nós explicamos como conquistar aquilo você procurava ao clicar nesse texto: como unir ao máximo esses três círculos de nossa vida.</p>

        <Diagrama src="/static/texto-1-diagrama-tarefas-6.svg" />

        <p>A coisa é muito mais simples do que você pode imaginar. Pra ler o texto completo, é só deixar seu email aí, que eu te envio!</p>

        <MailChimp text="" location="texto-1-want-more" buttonText="quero ter motivação!" />

        <p>Um abraço, e qualquer coisa, deixa um comentário aí em baixo e vamos conversando :)</p>
    </LayoutPost>
);