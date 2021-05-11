import React from 'react';
import { shallow } from "enzyme"
import App from "../../src/App";

describe('Tests in App', () => {
    test('should render properly', () => {
        const wrapper = shallow(<App />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should show a list of categories', () => {
        const wrapper = shallow(<App  />);

        expect(wrapper.find('GifGrid').length).toBe(1);
    })
    
});