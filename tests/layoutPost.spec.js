import React from 'react';
import LayoutPost from '../components/LayoutPost';
import renderer from 'react-test-renderer';

describe('layoutPost.spec.js', () => {
    it('snapchot', () => {
        const component = renderer.create(
            <LayoutPost title="Layout Title" id="layout-title" date={1539901476547}>This is a text</LayoutPost>
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
