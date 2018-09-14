import { PADDING_UNIT } from '../config/style-guide';

export default ({ children }) => (
    <div>
        <style jsx>{`
            div {
                margin: 0;
                padding: 0 ${ 4 * PADDING_UNIT }px;

                min-height: 100vh;

                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;
            }
        `}</style>

        {children}
    </div>
);
