import { API_URL, HEADERS } from './config';
import { toJSON } from './utils';

const search = (param, type) => {
  return fetch(`${API_URL}/search?q=${param}&type=${type}`, HEADERS).then(toJSON);
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

module.exports = {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
}
