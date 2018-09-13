import { withRouter } from 'next/router';
import Logo from '../components/Logo';

const Article = ({ content: __html }) => (
    <article>
        <div dangerouslySetInnerHTML={{ __html }}></div>
    </article>
);

export default withRouter(({ router: { query: { title, content } } }) => (
    <div>
        <style jsx>{`
            article {
                background: gray;
            }
            div {
                border: 2px solid red;
                padding: 12px;
            }
            h1 { color: blue }
        `}</style>
        <Logo />
        Welcome to next.js! = {title}
        <Article content={content} />
    </div>
));
