import Link from 'next/link'

export default () => (
    <div>
        <style jsx>{`
            div {
                border: 2px solid red;
                padding: 12px;
            }

            a {
                padding: 12px;
            }
        `}</style>

        <h1>About Page</h1>

        <Link href="/" prefetch>
            <a>Home</a>
        </Link>

        <Link href="/contact" prefetch>
            <a>Contact</a>
        </Link>

        <Link href="/login" prefetch>
            <a>Login</a>
        </Link>
    </div>
);
