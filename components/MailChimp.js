/* eslint-disable max-len  */

import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import AnimateForever from './AnimateForever';
import { colors, PADDING_UNIT, BORDER_RADIUS } from '../config/style-guide';

const MailChimp = ({
    text,
    placeholder,
    id,
    buttonAnimationDelay,
    inputRef,
}) => (
    <div id={`form-${id}`}>
        <style jsx>
            {`
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

            .mc-field-group  :global(input), .mc-field-group :global(button) {
                padding: 0 ${2 * PADDING_UNIT}px;
                min-height: ${6 * PADDING_UNIT}px;
            }

            .mc-field-group > :global(*) {
                margin-top: ${PADDING_UNIT}px;
                margin-bottom: ${PADDING_UNIT}px;
            }
        `}
        </style>
        <form action="https://dayman.us12.list-manage.com/subscribe/post?u=52f6e7a33b2d54479c5fc54ee&id=b3accd19af" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL">{text}</label>

                <div className="mc-field-group">
                    <AnimateForever delay="1000" animateInterval={3 * buttonAnimationDelay}>
                        <div>
                            <input ref={inputRef} type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder={placeholder} />
                        </div>
                    </AnimateForever>

                    <AnimateForever animateInterval={buttonAnimationDelay} delay={buttonAnimationDelay}>
                        <Button defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe">Subscribe</Button>
                    </AnimateForever>
                </div>
                <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                    <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                </div>

                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_52f6e7a33b2d54479c5fc54ee_b3accd19af" tabIndex={-1} /></div>
            </div>
        </form>
    </div>
);

MailChimp.propTypes = {
    text: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    buttonAnimationDelay: PropTypes.number,
    inputRef: PropTypes.element.isRequired,
};

MailChimp.defaultProps = {
    text: 'Cadastre-se para receber na íntegra as novidades!',
    placeholder: 'digite seu email aqui',
    id: 'signup',
    buttonAnimationDelay: 10000,
};

export default MailChimp;
