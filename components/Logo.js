import Link from './Link';
import { PADDING_UNIT, LOGO_HEIGHT } from '../config/style-guide';

export default ({ absolute }) => (
    <div className="logo">
        <style jsx>{`
            object {
                height: ${LOGO_HEIGHT}em;
                font-size: initial;
                pointer-events: none;
            }

            div {
                flex-grow: 0;
            }

            div :global(a) {
                display: inline-block;
            }
        `}</style>

        <Link href="/" nostyle>
            <object data="/static/logo.svg" type="image/svg+xml">
                <img src="/static/logo.png" alt="" />
            </object>
        </Link>
    </div>
);

