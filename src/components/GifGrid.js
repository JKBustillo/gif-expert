import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const { images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            { loading && 'Loading'}

            <div className="card-grid">
                {images.map(image => (
                    <GifGridItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
}
 
export default GifGrid;