import Link from './Link';

export default ({ absolute }) => (
    <div>
        <style jsx>{`
            object {
                height: 6em;
                font-size: initial;
                pointer-events: none;
            }

            div {
                position: ${absolute ? 'absolute' : 'initial'};
                ${absolute ? 'margin-top: -4px;' : ''}
                ${absolute ? 'top: 0;' : ''}
                ${absolute ? 'left: 0;' : ''}
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

