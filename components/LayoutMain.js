import Logo from './Logo';
import Flex from './Flex';

export default ({ children }) => (
    <main>
        <Logo absolute />

        <Flex>
            {children}
        </Flex>
    </main>
);
