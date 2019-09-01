import React, { Component } from 'react';
import LayoutMain from '../../components/LayoutMain';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Video from '../../components/Video';

export default class OptinPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            confirm: false,
            loaded: false,
        };
    }

    componentDidMount() {
        this.setState({
            confirm: !!document.location.search.match(/confirm=yes/),
            loaded: true,
        });
    }

    render() {
        const { confirm, loaded } = this.state;

        return (
            <LayoutMain>
                <div>
                    <style jsx>
                        {`
                        h4 {
                            margin-top: 3em;
                            font-weight: 100;
                        }

                        h1 {
                            display: ${loaded ? 'initial' : 'none'};
                        }
                    `}
                    </style>

                    <h1>Inscrição {confirm ? 'confirmada' : 'cancelada'}, obrigado!</h1>

                    <h4>
                        Se quiser saber mais sobre a Bussola, assista o vídeo abaixo ou fale diretamente comigo pelo email <strong>dayman@bussola.school</strong>
                    </h4>

                    <Video title="O que é a Bussola.school?" src="https://www.youtube.com/embed/ovFOiN_RWsc" />

                    <br />

                    <Button>
                        <Link nostyle href="https://bussola.school">Retornar ao site</Link>
                    </Button>
                </div>
            </LayoutMain>
        );
    }
}
