export const getGifs = async (category) => {

   const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${category}&api_key=BW5indUo2Vu7uirnkdoiTek5HtsWIFgJ`;

   const resp = await fetch(url);
   const { data } = await resp.json();

   const gifs = data.map(gif => {
      return {
         id: gif.id,
         title: gif.title,
         url: gif.images.downsized_medium.url
      };
   });

   return gifs;
};