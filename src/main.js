import { API_URL, HEADERS } from './config';

const search = (param, type) => {
  return fetch(`${API_URL}/search?q=${param}&type=${type}`, HEADERS)
    .then(data => data.json());
}

const searchArtists = (artist) => {
  return search(artist, 'artist');
}

const searchAlbums = (album) => {
  return search(album, 'album');
}

const searchTracks = (tracks) => {
  return search(tracks, 'track');
}
const searchPlaylists = (playlist) => {
  return search(playlist, 'playlist');
}

export {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
}
