import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState({
        images: [],
        loading: true
    });

    useEffect(() => { 
        getGifs(category).then(images => {
            setImages({
                images,
                loading: false
            });
        });  
    }, [category]);

    return images;
};