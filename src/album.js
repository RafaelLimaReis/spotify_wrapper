import { API_URL, HEADERS } from './config';
import { toJSON } from './utils';

const getAlbum = (idAlbum) => {
  return fetch(`${API_URL}/albums/${idAlbum}`, HEADERS).then(toJSON);
}

const getAlbums = (idAlbums) => {
  return fetch(`${API_URL}/albums/?ids=${idAlbums}`, HEADERS).then(toJSON);
}
const getAlbumTracks = (idAlbum) => {
  return fetch(`${API_URL}/albums/${idAlbum}/tracks`, HEADERS).then(toJSON);
}

export {
  getAlbum,
  getAlbums,
  getAlbumTracks
}
