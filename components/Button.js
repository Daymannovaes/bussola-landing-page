import { colors } from '../config/style-guide';

export default ({ children }) => (
    <React.Fragment>
        <style jsx>{`
            .button {
                color: white;
                background: ${colors.midblue};
                border-radius: 3px;
                font-weight: bold;
                font-size: 0.6em;
                border: 0;
                border-bottom: 6px solid ${colors.deepblue};
                transition: 80ms all;
            }

            .button:hover {
                border-width: 4px;
            }

            .button:active, .button:focus {
                border-width: 0px;
            }
        `}</style>
        <button className="button">{children}</button>
    </React.Fragment>
);
