
export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/stickers/search?q=${encodeURI(category)}&limit=10&api_key=PFVvhfL0JApPVrMjn6jA3a73AnLeedP8`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }));

  return gifs;
}