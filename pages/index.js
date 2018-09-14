import Link from 'next/link'

export default () => (
    <div>>
        <style jsx>{`
            article {
                background: gray;
            }
            div {
                border: 2px solid red;
                padding: 12px;
            }
            h1 { color: blue }

            a {
                margin: 12px;
            }
        `}</style>

        Welcome to next.js!

        <Link href="/about" prefetch>
            <a>About</a>
        </Link>

        <Link href="/contact" prefetch>
            <a>Contact</a>
        </Link>

        <Link href="/login" prefetch>
            <a>Login</a>
        </Link>
    </div>
);
