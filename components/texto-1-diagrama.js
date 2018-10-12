import ReactSVG from 'react-svg';

export default ({ src, ...props }) => (
    <div>
        <style jsx>{`
            div :global(g[id$="group"] path) {
                transition: 200ms all;
            }

            div :global(g[id$="group"] path:hover) {
                fill-opacity: 0.9;
            }
        `}</style>

        <ReactSVG src={src} {...props} />
    </div>
);