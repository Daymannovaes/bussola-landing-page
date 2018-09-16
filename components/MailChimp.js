import Button from './Button';
import { colors, PADDING_UNIT, BORDER_RADIUS } from '../config/style-guide';

export default ({
    text = 'Cadastre-se para receber na íntegra as novidades!',
    placeholder ='digite seu email aqui',
    id = "signup"
}) => (
    <div id={`form-${id}`}>
        <style jsx>{`
            input[type="email"] {
                padding: 0 ${2 * PADDING_UNIT}px;
                margin: 0 ${2 * PADDING_UNIT}px;
                font-size: 1rem;
                background-color: #fff;
                background-image: none;
                border-radius: ${BORDER_RADIUS}px;
                border: 0;
                color: ${colors.deepblue};
            }

            .mc-field-group {
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                justify-content: center;

                margin: ${2 * PADDING_UNIT}px 0;
            }

            #form-${id} {
                margin-top: ${7 * PADDING_UNIT}px;
            }

            .mc-field-group  > :global(*) {
                padding: 0 ${2 * PADDING_UNIT}px;
                min-height: ${6 * PADDING_UNIT}px;
            }
        `}</style>
        <form action="https://dayman.us12.list-manage.com/subscribe/post?u=52f6e7a33b2d54479c5fc54ee&id=b3accd19af" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL">{text}</label>

                <div className="mc-field-group">
                    <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder={placeholder} />
                    <Button defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe">Subscribe</Button>
                </div>
                <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{display: 'none'}} />
                    <div className="response" id="mce-success-response" style={{display: 'none'}} />
                </div>

                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_52f6e7a33b2d54479c5fc54ee_b3accd19af" tabIndex={-1} /></div>
            </div>
        </form>
    </div>
);
