export default ({ absolute }) => (
    <div>
        <style jsx>{`
            object {
                height: 6em;
                position: ${absolute ? 'absolute' : 'initial'};
                ${absolute ? 'margin-top: -4px;' : ''}
            }
        `}</style>

        <object data="static/logo.svg" type="image/svg+xml">
            <img src="static/logo.png" alt="" />
        </object>
    </div>
);

