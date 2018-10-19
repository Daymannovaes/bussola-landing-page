import React from 'react';
import Disqus from '../components/Disqus';
import renderer from 'react-test-renderer';

describe('disqus.spec.js', () => {
    it('snapchot', () => {
        const component = renderer.create(
            <Disqus id="some-id" title="some title" />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
