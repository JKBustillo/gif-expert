import React from 'react';
import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory";

describe('Tests in AddCategory', () => {
    const setCategories = jest.fn();

    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory categories={[]} setCategories={setCategories} />);
    });

    test('should render properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change the input', () => {
        wrapper.find('input').simulate('change', { target: { value: 'Dragon ball' }});
    });

    test('should not submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect(setCategories).not.toHaveBeenCalled()
    });

    test('should call setCategories and clean the input', () => {
        wrapper.find('input').simulate('change', { target: { value: 'Dragon ball' }});
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Array));

        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
})
