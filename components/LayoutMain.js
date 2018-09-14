import Logo from '../components/Logo';

export default ({ children }) => (
    <div>
        <Logo />
        <h1>layout main</h1>

        {children}
    </div>
);
