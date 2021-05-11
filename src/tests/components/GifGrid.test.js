import React from 'react';
import { shallow } from "enzyme"
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests in GifGrid', () => {
    const category = 'Dragon ball';

    test('should render properly', () => {
        useFetchGifs.mockReturnValue({ images: [], loading: true });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should show items when images load', () => {
        const gifs = [{
            id: 123,
            title: '123',
            url: 'http://google.com/algo.jpg'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});