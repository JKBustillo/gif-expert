import React from 'react';
import { shallow } from "enzyme"
import GifGridItem from "../../components/GifGridItem";

const title = 'title';
const url = 'https://www.youtube.com/algo.jpg';
const wrapper = shallow(<GifGridItem title={title} url={url} />);

describe('Tests in GifGridItems', () => {
    test('should load properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have a p with title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    
    test('should have url as src and title as alt', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('should have animate__fadeIn class', () => {
        const div = wrapper.find('div');

        expect(div.hasClass('animate__fadeIn')).toBe(true);
    });
});
