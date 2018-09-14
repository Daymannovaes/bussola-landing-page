import Link from 'next/link';

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

            a {
                display: inline-block;
            }
        `}</style>

        <Link href="/" prefetch>
            <a>
                <object data="/static/logo.svg" type="image/svg+xml">
                    <img src="/static/logo.png" alt="" />
                </object>
            </a>
        </Link>
    </div>
);

