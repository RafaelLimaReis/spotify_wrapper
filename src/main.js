import { API_URL } from './config';

const search = (param, type) => {
  return fetch(`${API_URL}/search?q=${param}&type=${type}`)
    .then(data => data.json());
}
const searchAlbums = () => {}
const searchArtists = () => {}
const searchTracks = () => {}
const searchPlaylists = () => {}

export {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
}
