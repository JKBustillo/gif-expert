export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=4IuHCwZOVC7gw6dwpZ3yQHNHBAPrFyDH`;

    const { data } = await (await fetch(url)).json()

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));

    return gifs;
};