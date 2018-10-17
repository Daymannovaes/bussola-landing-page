import React from 'react';
import Button from '../components/Button';
import Link from '../components/Link';

export default () => (
    <div>
        <style jsx>
            {`
            h4 {
                margin-top: 3em;
                font-weight: 100;
            }
        `}
        </style>

        <h1>Inscrição confirmada, obrigado!</h1>

        <h4>
            Agora é so alegria!
            <br />
            Basta esperar as novidades saírem que você vai recebe-las no conforto de sua casa
        </h4>

        <Button>
            <Link nostyle href="https://bussola.school">Retornar ao site</Link>
        </Button>
    </div>
);
