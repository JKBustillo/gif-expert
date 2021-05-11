import React, { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({ categories, setCategories }) => {
    const [gifName, setGifName] = useState('');

    const handleAdd = (name) => {
        setCategories([name, ...categories]);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (!gifName.trim() || categories.includes(gifName)) {
            return;
        }

        handleAdd(gifName);
        setGifName('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={gifName}
                onChange={e => setGifName(e.target.value)}
            />
        </form>
    );
}
 
export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};