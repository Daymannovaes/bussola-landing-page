export default ({ absolute }) => (
    <div>
        <style jsx>{`
            object {
                height: 6em;
                font-size: initial;
                position: ${absolute ? 'absolute' : 'initial'};
                ${absolute ? 'margin-top: -4px;' : ''}
                ${absolute ? 'top: 0;' : ''}
                ${absolute ? 'left: 0;' : ''}
            }
        `}</style>

        <object data="/static/logo.svg" type="image/svg+xml">
            <img src="/static/logo.png" alt="" />
        </object>
    </div>
);

