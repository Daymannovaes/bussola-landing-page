import React from 'react';
import Link from '../components/Link';
import renderer from 'react-test-renderer';

import Router from 'next/router';
const mockedRouter = { push: () => {}, prefetch: () => {} };
Router.router = mockedRouter;

describe('link.spec.js', () => {
    it('snapchot', () => {
        const component = renderer.create(
            <Link href="/about">About</Link>
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        console.log(tree);
        expect(tree.props.className).toContain('styled-link');
    });
});
