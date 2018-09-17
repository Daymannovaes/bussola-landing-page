import { PADDING_UNIT } from '../config/style-guide';

export default ({ children, container }) => (
    <div className="flex">
        <style jsx>{`
            div {
                margin: 0;

                ${container ? 'min-height: 100vh' : ''};
                flex-grow: ${container ? '0' : '1'};

                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;
            }
        `}</style>

        {children}
    </div>
);
